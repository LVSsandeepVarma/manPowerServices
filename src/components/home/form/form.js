import React, { useEffect, useState } from 'react'
import {
    useGoogleReCaptcha,
  } from "react-google-recaptcha-v3";
  import { useFormik } from 'formik';
  import * as Yup from 'yup';
  import axios from "axios"
import FormMessage from './formMessage';
import Modalsubmission from '../modal/modalsubmission';
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function ServicesForm() {
    const [loadStatus, setLoadStatus] = useState(true);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorObj, setErrorObj] = useState([]);
    const [isOpen, setIsopen] = useState(true)
    useEffect(()=>{
        setLoadStatus(false)
    },[])

    const handleModalClose = ()=>{
      setIsopen(false)
    }

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
        }, 1000000);
      }
  
      return () => {
        clearTimeout(timeoutId);
      };
    }, [errorObj]); 

    const { executeRecaptcha } = useGoogleReCaptcha();
    const validationSchema = Yup.object().shape({
      name: Yup.string().matches(/^[A-Za-z ]+$/, "only charecters are allowed").required("Name is required"),
      phone: Yup.string().matches(/^\+?\d{1,3}(?:\s?\d{5,16})?$/, 'Invalid phone number').required("phone number is required").min(5,"atleast 5 digits are required"),
      service: Yup.string().required('Service is required'),
      description: Yup.string().required('Description is required'),
    });

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

  return (
    <>
    {loadStatus && <div className="preloader"><div className="loader"></div></div>}
    <div className="login-box">
                    <p>Get Quote</p>
                    <form onSubmit={formik.handleSubmit}>
      <div className="user-box">
        <input
          required
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label>Name</label>
        {formik.errors.name && formik.touched.name && (
        <div className="error">{formik.errors.name}</div>
      )}
      </div>
      

      <div className="user-box">
        <input
          required
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <label>Phone</label>
        {formik.errors.phone && formik.touched.phone && (
        <div className="error">{formik.errors.phone}</div>
      )}
      </div>
      

      <div className="form-group" style={{marginBlock:"24px"}}>
        <select
          className="form-control" style={{marginBottom:"0"}}
          name="service"
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
        {formik.errors.service && formik.touched.service && (
        <div className="error">{formik.errors.service}</div>
      )}
      </div>
      

      <div className="user-box">
        <textarea
          name="description"
          rows="2"
          className="form-control main-form-text"
          placeholder="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
        ></textarea>
        {formik.errors.description && formik.touched.description && (
        <div className="error">{formik.errors.description}</div>
      )}
      </div>
      

      <a href="#" onClick={formik.handleSubmit}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Send Request
      </a>
    </form>
    {(errorObj?.length >0) && <FormMessage type={"Error"} message={errorObj} isOpen={isOpen} close={handleModalClose} />}
          {(successMsg?.length >0) && <FormMessage type={"Success"} message={successMsg} isOpen={isOpen} close={handleModalClose}  />}
    {/* {successMsg?.length>0 && <FormMessage type={"success"} message={successMsg} />}
    {errorObj?.length >0 && <FormMessage type={"danger"} message={errorObj} />} */}

                    {/* <!-- <p>Don't have an account? <a href="" className="a2">Sign up!</a></p> --> */}
                  </div>
    </>
    
  )
}
