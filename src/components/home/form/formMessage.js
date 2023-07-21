import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import {
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import Modalsubmission from '../modal/modalsubmission';
import { Modal } from 'react-bootstrap';


export default function FormMessage({type, message, isOpen, close  }) {
      const [loadStatus, setLoadStatus] = useState(true);
      const [show, setShow] = useState(isOpen)
    useEffect(()=>{
        setLoadStatus(false);
    },[])

    // console.log(type, message, isOpen )

  

  return (
    <>
    {/* <Modalsubmission/> */}
     {loadStatus && <div className="preloader"><div className="loader"></div></div>}
    <Modal show={show} centered onHide={()=>{
        setShow(false);
        close()
        }} >
        <Modal.Header style={type!="Success"? {fontWeight:"bold", color:"Red"}:{fontWeight:"bold", color:"green"}}>{type=="Success"?"Success":"Failed"}</Modal.Header>

      <Modal.Body className="modal-dialog modal-dialog-centered">
        <div className="">
          {(type == "Error") && <Modalsubmission type={"Error"} message={message} />}
          {(type== "Success") && <Modalsubmission type={"Success"} message={message} />}
          {/* {successMsg?.length>0 && <FormMessage type={"success"} message={successMsg} />}
    {errorObj?.length >0 && <FormMessage type={"danger"} message={errorObj} />} */}
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
}
