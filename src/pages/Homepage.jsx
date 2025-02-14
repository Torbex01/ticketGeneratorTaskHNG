
import Details from '../components/Details';
import Prices from '../components/Prices';
const Homepage = () =>{
    return(
                <div className="ticketDiv">
                   <div className="ticketHeader">
                   <div className="ticketProgress"><h1>Ticket Selection</h1>  <p>Step 1/3</p></div>
                   <nav className='progressBar'></nav>  
                   </div>
                    <form id='homeDiv'>
                       
                          <Details />
            

                        <div className="priceContainer">
                         <p>Select Ticket Type:</p>
                        <div className="priceDiv">
                            <Prices price={'FREE'} rate={'REGULAR'}  />
                            <Prices price={'$150'} rate={'VIP'} />
                            <Prices price={'$250'}  rate={'VVIP'}  />
                        </div>
                        </div>

                        <div className="dropdown">
                             <p> Number of Tickets</p>
                              <select >
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                              </select>
                        </div>

                        <div className="buttonDiv">
                    <button className="cancelButton">Cancel</button>
                    <button id="nextButton">Next</button>
                        </div>
                    </form>
                </div>
    )
}

export default Homepage