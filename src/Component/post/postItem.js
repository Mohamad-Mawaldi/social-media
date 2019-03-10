import React from 'react'
import { Link } from "react-router-dom";
//connect the router


const PostItem = (props) => {

  return (
    <div className="m-4">
        <div class="card gedf-card">
    <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center">
                <div class="mr-2">
                <div className="col-sm-5">
                        <div className="round">
                            <div className="text-center">WA</div>
                        </div>
    	            </div>
                </div>
                <div class="ml-2">
                <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                </div>
            </div>
        </div>
    
    </div>
    <div class="card-body">
        <p class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
        </p>
    </div>
    <div class="card-footer">
        {/* {this.props.status} */}
    </div>
    </div>
    </div>
  );
};
export default PostItem;
