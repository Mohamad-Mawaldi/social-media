import React from 'react'
import { Link } from "react-router-dom";
//connect the router


const PostItem = (props) => {

  return (
    <div className="m-4">
        <div className="card gedf-card">
    <div className="card-header">
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
                <div className="mr-2">
                <div className="col-sm-5">
                        <div className="round">
                            <div className="text-center">WA</div>
                        </div>
    	            </div>
                </div>
                <div className="ml-2">
                <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                </div>
            </div>
        </div>
    
    </div>
    <div className="card-body">
        <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
        </p>
    </div>
    <div className="card-footer">
        {/* {this.props.status} */}
    </div>
    </div>
    </div>
  );
};
export default PostItem;
