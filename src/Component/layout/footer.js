import React from "react";
import { Link } from 'react-router-dom';
import './layout.css';
//connect the router



const Footer = () => {

   const logo = "WaelBook";  
  return (
    <div className="footer bg-dark fixed-bottom">

        <div className="container">
        
            <p className="text-center">Copyright @2017 | Designed With by <a className ="logo-link" href="#">{logo}</a></p>

            <ul className="social_footer_ul">
            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
            <li><a href=""><i className="fab fa-twitter"></i></a></li>
            <li><a href=""><i className="fab fa-linkedin"></i></a></li>
            <li><a href=""><i className="fab fa-instagram"></i></a></li>
            </ul>

        </div>

      
    </div>
  )
}
export default Footer;


