import React, { Component } from "react";
import PostList from "../post/postList";
import AddPost from "../post/addPost";

//connect the router

export default class DashBoard extends Component {

    state={
        posts:[
        {title:'First Post', id: 0, content:'First post my friends', author:'MM', status:'Good'},
        {title:'Seconde Post', id: 1, content:'Seconde Post post my friends', author:'MX', status:'Not Good'},
        {title:'Third Post', id: 2, content:'Third Post post my friends', author:'WA', status:'Great'},
        {title:'Fourth Post', id: 3, content:'Fourth Post post my friends', author:'NR', status:'Bad'}]
    }

     addPost = (title,content) => {
        console.log('called');
        console.log('heeee', title,content);
        const postArray = [...this.state.posts];
        const id = postArray.length
        postArray.push({title: title, id : id, content:content, author : "MM", status : "Bad"});
        this.setState({ posts:postArray });
        console.log('posts', this.state)
       console.log('postArray.length', postArray.length)
    }

    deletePost = (id) =>{
      console.log('id', id);
      const postArray = [...this.state.posts]
      const filter =  postArray.filter( post => post.id !== id );
      console.log('postArray', filter);
      this.setState({
        posts: filter
      });
    }


  render() {
    return (
      <div className="hight">
        <div className="container">
          <AddPost addPost={this.addPost} />
          <div className=" col-md-7 mx-auto">
            <PostList posts={this.state.posts} deletePost={this.deletePost}  />
          </div>
          <div className="push" />
        </div>
      </div>
    );
  }
}
