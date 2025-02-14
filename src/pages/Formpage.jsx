import React from 'react'
import './Formpage.css'
import { BiCloudDownload } from "react-icons/bi";
const Formpage = () => {
  return (
    <div id='pageTwo' className='ticketDiv'>
         <div className="ticketHeader">
                   <div className="ticketProgress"><h1>Attendee Details</h1>  <p>Step 2/3</p></div>
                   <nav className='progressBarTwo'></nav>
                   </div> 
                   <form id='register' action="">
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

                        <main>
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" />
                        </main>
                        
                        <main>
                       <label htmlFor="email">Enter your email</label>
                       <input type="email" placeholder='hello@avioflagos.io' />
                        </main>

                        <main>
                       <label htmlFor="message">Special Request?</label>
                       <input type="text" />
                        </main>

                        <div className="buttonDiv">
                    <button className="cancelButton">Back</button>
                    <button id="nextButton">Get My Free Ticket</button>
                        </div>
                   </form> 
    </div>
  )
}

export default Formpage