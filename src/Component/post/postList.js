import React from 'react'
import { Link } from "react-router-dom";
import PostItem from './postItem'

//connect the router

const PostList = ({posts,deletePost}) => {
  return (
   
<div>
{ posts && posts.map( post => {
      console.log('value', post)
      return ( 
        // <Link to={'/post/' +post.id } key={post.id}>
        <PostItem post={post} deletePost={deletePost}/>
        // </Link>
        )
    })}
</div>
  );
};
export default PostList;
