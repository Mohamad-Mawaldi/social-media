import React, { Component } from "react";
import PostList from "../post/postList";
import AddPost from "../post/addPost";

//connect the router

export default class DashBoard extends Component {

    state={
        posts:[
        {title:'First Post', id: '1', content:'First post my friends', author:'MM', status:'Good'},
        {title:'Seconde Post', id: '2', content:'Seconde Post post my friends', author:'MX', status:'Not Good'},
        {title:'Third Post', id: '3', content:'Third Post post my friends', author:'WA', status:'Great'},
        {title:'Fourth Post', id: '4', content:'Fourth Post post my friends', author:'NR', status:'Bad'}]
    }

     addPost = (title,content,id) => {
        console.log('called');
        console.log('heeee', title,id,content);
        const postArray = this.state.posts;
        postArray.push({title: title, id : id, content:content, author : "MM", status : "Bad"});

        // this.state.posts.push({title: title, id : id, content:content, author : author, status : status});
        this.setState({
          posts:postArray
        });

        //this.setState( [...state.posts, {title: title, id : id, content:content, author : author, status : status} );
          
        console.log('posts', this.state)
    }


  render() {
    return (
      <div className="hight">
        <div className="container">
          <AddPost addPost={this.addPost} />
          <div className=" col-md-7 mx-auto">
            <PostList posts={this.state.posts}  />
          </div>
          <div className="push" />
        </div>
      </div>
    );
  }
}
