import Homepage from "./pages/Homepage"
import logo from './assets/Frame 1618871078.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formpage from "./pages/Formpage";
const App = () =>{
  return(
    <div>
        <header className="homeHeader">
                    <img src={logo} alt="tics logo" />
                    <div className="headerText">
                        <p>Events</p> <p>My Tickets</p> <p>About Project</p>
                    </div>
                    <button>My Tickets <FaLongArrowAltRight /> </button>
        </header>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/form" element={< Formpage/>} />
          </Routes>
        </BrowserRouter>
      
    </div>
  )
}
export default App