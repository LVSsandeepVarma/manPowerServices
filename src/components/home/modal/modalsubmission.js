import React from 'react'
import { Modal } from 'react-bootstrap'
import "./s.css"
import {BsPatchExclamation} from "react-icons/bs"
export default function Modalsubmission({type, message}) {
    // console.log(type, message)
  return (
    <>
    {/* <Modal>
        <Modal.Body> */}
        <div className="main-container">
	<div className="check-container">
		{type=="Success" && <div className="check-background">
			<svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7 25L27.3077 44L58.5 7" stroke="white" stroke-width="13" stroke-linecap="round" strokeLinejoin="round" />
			</svg>
		</div>}
        {type !== "Success" && <div className='cross-background'>
        <svg viewBox="0 0 65 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10L50 40M50 10L15 40" stroke="white" stroke-width="13" stroke-linecap="round" strokeLinejoin="round" />
              </svg>
        </div>}
		<div className="check-shadow"></div>

	</div>
    {type=="Success" ? <p style={{fontWeight:"bold" , color:"darkgreen"}}>{type}</p> :  <p style={{fontWeight:"bold" , color:"darkred"}}>{type}</p> }
    {type=="Success" && <p style={{color:"green", marginBottom:"10px"}}>{message}</p>}
    {type !== "Success" && message?.length>0 &&

            message.map((val, ind) =>
              Object.values(val).map((err, i) => (

                <span style={{color:"red", marginBottom:"10px"}}>

                  <BsPatchExclamation style={{marginRight:"3px"}}/>{err}
                  
                </span>
              ))
            )
              }
</div>
        {/* </Modal.Body>
    </Modal> */}
    </>
  )
}
