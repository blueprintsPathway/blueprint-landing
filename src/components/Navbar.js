import { Link } from "react-router-dom";
import './Navbar.css'


function Navbar (){

    return(
        <>
          <nav>

            <div id="logo-space">
              <span id="logo">LOGO</span>
            </div>

           <div className="right-side">
           <ul className="menu-top">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li> 
              <Link to="/solutions">Our Solutions</Link>
              </li>
              <li> 
              <Link to="/products">Our Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
           </div>
          </nav>
        </>
      
    )
}

export default Navbar;