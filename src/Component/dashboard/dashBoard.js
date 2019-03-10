import React from "react";
import { Link } from "react-router-dom";
import PostList from '../post/postList';
//connect the router

const DashBoard = () => {
  return (
      <div className="hight">
       <div className="container">
       <div className="new-post">

            <div className=" col-md-5 mx-auto">
            
                <div className="form-group row">
                    <div className="mt-3"><h4>Add New Post</h4></div>
                </div>

                <div className="form-group row">
                    <input  placeholder="Enter Title here" className="form-control" type="text" />
                </div>

                <div className="form-group row">
                    <textarea  rows="2" className="form-control" placeholder="Enter Content here"/>
                </div>
                <button type="button" className="btn btn-primary btn-lg btn-block">Add</button>
            </div>
       </div>

       <div className=" col-md-7 mx-auto">
    <PostList/>
    </div>
    <div className="push" />
</div>
</div>


  );
};
export default DashBoard;





                  