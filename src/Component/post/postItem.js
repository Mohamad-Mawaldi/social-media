import React from "react";
import { Link } from "react-router-dom";
//connect the router

const PostItem = ({ post, deletePost }) => {
  return (
    <div className="m-4">
      <div className="card">
        <div className="card-header">
        <div  className="float-right" onClick={() => {deletePost(post.id);}}>
        <i className="fas fa-times" /></div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <div className="col-sm-5">
                  <div className="round">
                    <div className="text-center">{post.author}</div>
                  </div>
                </div>
              </div>
              <div className="ml-2">
                <h5 className="card-title">{post.title}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">{post.content}</p>
        </div>
        <div className="card-footer">{post.status}</div>
      </div>
    </div>
  );
};
export default PostItem;
