import React from "react";
import Profile from "../../assets/Wael-Alshabani.jpg";

//connect the router

const AboutMe = props => {
  return (
    <div>
      <div className="container m-5">
        <div className="row">
          <div className="mx-auto"></div>
          <div className="col-4">
            <img className="rounded-circle profile-image" src={Profile} alt="profile-image"/>
          </div>
          <div className=" col-6 float-right mt-1 p-4">
            <h1>Hi there, I'm Wael Alshabani</h1>
            <h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum Excepteur sint
                occaecat cupidatat non proident,
              </p>
            </h6>
          </div>
          <div className="push" />{/* push the page 100% to keep the footer down */}
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
