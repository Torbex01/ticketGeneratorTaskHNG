import React from 'react'
import './Formpage.css'
import { BiCloudDownload } from "react-icons/bi";
const Formpage = () => {
  return (
    <div className='ticketDiv'>
         <div className="ticketHeader">
                   <div className="ticketProgress"><h1>Attendee Details</h1>  <p>Step 2/3</p></div>
                   <nav className='progressBarTwo'></nav>
                   </div> 
                   <form action="">
                        <div className="uploadDiv">
                            <p>Upload Profile Photo</p>
                            <div className="picHolder">
                                <div className="picBox">
                                    <BiCloudDownload size={60}/>
                               <p> Drag & drop or click to upload</p>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <label htmlFor="name">Enter your name</label>
                        <input type="text" />

                        <label htmlFor="email">Enter your email</label>
                        <input type="email" placeholder='hello@avioflagos.io' />
                   </form> 
    </div>
  )
}

export default Formpage