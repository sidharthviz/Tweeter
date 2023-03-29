import Post from "./Post"
import { useState } from "react";
import NewPost from "./NewPost";
import classes from './PostList.module.css';

function PostList() {
  const [textbody, setBody] = useState('');
  const [text, setText] = useState('');
    
  function changeBodyHandler(event){
    setBody(event.target.value); 
  }

  function changeTextHandler(event){
    setText(event.target.value); 
  }

  return (
    <>
     {/* <Modal> */}
        <NewPost 
            changeBody={changeBodyHandler} 
            changeText={changeTextHandler} 
        />
     {/* </Modal> */}
     
    <ul className={classes.posts}>
    <Post  author={text} body={textbody}/> 
    <Post  author="Post" body="Post anything"/> 
    </ul>
    </>
  )
}

export default PostList;