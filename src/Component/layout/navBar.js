import React from "react";
import { Link } from 'react-router-dom';
//connect the router



const NavBar = () =>{

   const logo = "WaelBook";  
  
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark ">
          <div className="container">
             {/* <Link className="navbar-brand" to="/">{logo}</Link> */}
             <h1 className="navbar-brand">{logo}</h1>
                <div>
                    <div className="col-sm-5">
                        <div className="round">
                            <div className="text-center">WA</div>
                        </div>
    	            </div>
                </div> 
          </div>
        </nav>  
    </div>
  )
}
export default NavBar;
