import Post from "./Post"
import { useState } from "react";
import NewPost from "./NewPost";
import classes from './PostList.module.css';
import Modal from "./Modal";

function PostList({isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function postHandler(postData){
   setPosts((existingPosts) => [postData, ...existingPosts])
  }
  
  return (
    <>
     {isPosting && (

      <Modal onClose={onStopPosting}>
      <NewPost onCancel={onStopPosting} onAddPost={postHandler} />
   </Modal> 
   )}
    {posts.length > 0 && ( 
          <ul className={classes.posts}>
          {posts.map((post) => (
         <Post author={post.author} body={post.body} />
          ))}
          </ul>
       )}
       {posts.length === 0 && (
          <div style={{textAlign: 'center', 'color': 'white'}}>
            <h2>There are no Posts yet.</h2>
            <p>Let's Add Some!</p>
          </div>
       )}
    </>
  )
}

export default PostList;
