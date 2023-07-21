import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import FormMessage from '../form/formMessage';
import {
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Modalsubmission from './modalsubmission';

const validationSchema = Yup.object().shape({
  name: Yup.string().matches(/^[A-Za-z ]+$/, "only charecters are allowed").required("Name is required"),
  phone: Yup.string().matches(/^\+?\d{1,3}(?:\s?\d{5,16})?$/, 'Invalid phone number').required("phone number is required").min(5,"atleast 5 digits are required"),
  service: Yup.string().required('Service is required'),
  description: Yup.string().required('Description is required'),
});

export default function ServiceModal({ isOpen, onClose, service }) {
      const [loadStatus, setLoadStatus] = useState(true);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorObj, setErrorObj] = useState([]);
    const { executeRecaptcha } = useGoogleReCaptcha();


  const handleModalClose = ()=>{
    setSuccessMsg("");
    setErrorObj([])
  }

    useEffect(()=>{
        setLoadStatus(false);
    },[])
    const formik = useFormik({
      initialValues: {
        name: '',
        phone: '',
        service: '',
        description: '',
      },
      validationSchema: validationSchema,
      onSubmit: async(values, {resetForm}) => {
        setLoadStatus(true)
        setSuccessMsg("");
        setErrorObj([])
        // Handle form submission logic here
        const token = await executeRecaptcha("servicesQuote");
        try{
          let response = await axios.post("https://payment.globalcrmsoftware.com/api/send/enquiry",
           {
            name:values.name,
            phone:values.phone,
            service:values.service,
            description: values.description,
            recaptcha_token: token
           }
           )
           if(response?.data.status){
            // console.log(response,response?.message, response?.data?.message)
            setSuccessMsg(response.data?.message)
           }else{
              if(response?.data?.message){
                // console.log(response?.data?.message)
                const errObj = [{"captcha":response?.data?.message}]
                setErrorObj(errObj)
              }else{
                // console.log(response?.data?.errors,"else case")
                setErrorObj([response?.data?.errors]);
              }
           }
           resetForm()

        }catch(err){
          console.error(err,err?.data,"err")

        }
        // console.log(values);
        setLoadStatus(false)
      },
    });

  useEffect(() => {
    let timeoutId;

    if (successMsg) {
      timeoutId = setTimeout(() => {
        setSuccessMsg("");
      }, 100000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [successMsg]);

  useEffect(() => {
    let timeoutId;

    if (errorObj) {
      timeoutId = setTimeout(() => {
        setErrorObj([]);
      }, 100000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [errorObj]); 

  // console.log("isOpen", isOpen,successMsg?.length,errorObj?.length)

  return (
    <>
    {/* <Modalsubmission/> */}
     {loadStatus && <div className="preloader"><div className="loader"></div></div>}
    <div className={`modal fade ${isOpen ? 'show' : ''}`} id="myModal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          {(successMsg?.length ==  0 && errorObj?.length == 0) && <form onSubmit={formik.handleSubmit}>
            <div className="subscribe">
              <p>Get Quote</p>
              <div className="subscribe-input-field">
                <input
                  placeholder="Your Name"
                  className="subscribe-input"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && (
                <div className="error">{formik.errors.name}</div>
              )}
              </div>
              

              <div className="subscribe-input-field">
                <input
                  placeholder="Phone"
                  className="subscribe-input"
                  name="phone"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone && (
                <div className="error">{formik.errors.phone}</div>
              )}
              </div>
              

              <div className="form-group subscribe-input-field" >
                <select
                  className="form-control modal-select"
                  name="service"
                  style={{marginBlock:0}}
                  onChange={formik.handleChange}
                  value={formik.values.service}
                >
                  <option value="" disabled>
                    --Select Service--
                  </option>
                  <option value="Electrical">Electrical</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Packers & Movers">Packers & Movers</option>
                  <option value="Garbage">Garbage</option>
                  <option value="Scrap">Scrap</option>
                </select>
                {formik.touched.service && formik.errors.service && (
                <div className="error">{formik.errors.service}</div>
              )}
              </div>
              

              <div className="subscribe-input-field">
                <textarea
                style={{marginBlock:0}}
                  className="form-control modal-form-text"
                  name="description"
                  rows="2"
                  placeholder="Description..."
                  onChange={formik.handleChange}
                  value={formik.values.description}
                ></textarea>
                {formik.touched.description && formik.errors.description && (
                <div className="error">{formik.errors.description}</div>
              )}
              </div>
              

              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </div>
          </form>}
          {(errorObj?.length >0) && <FormMessage type={"Error"} message={errorObj} isOpen={true} close={handleModalClose}/>}
          {(successMsg?.length >0) && <FormMessage type={"Success"} message={successMsg} isOpen={true} close={handleModalClose} />}
          {/* {successMsg?.length>0 && <Modalsubmission type={"success"} message={successMsg} />}
    {errorObj?.length >0 && <Modalsubmission type={"danger"} message={errorObj} />} */}
        </div>
      </div>
    </div>
    </>
  );
}
