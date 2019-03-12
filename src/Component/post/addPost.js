import React, { Component } from "react";
//connect the router

export default class AddPost extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log("state", this.state);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    console.log('state', this.state);
    this.props.addPost( this.state.title,this.state.content);

  };

  render(props) {
    return (
      <div className="new-post">
        <form id="register-form" onSubmit={this.handleSubmit}>
          <div className=" col-md-5 mx-auto">
            <div className="form-group row">
              <div className="mt-3">
                <h4>Add New Post</h4>
              </div>
            </div>

            <div className="form-group row">
              <input
                placeholder="Enter Title here"
                id="title"
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group row">
              <textarea
                rows="2"
                className="form-control"
                id="content"
                placeholder="Enter Content here"
                onChange={this.handleChange}
              />
            </div>
            <button className="btn btn-primary btn-lg btn-block">Add</button>
          </div>
        </form>
      </div>
    );
  }
}
