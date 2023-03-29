import Post from "./Post"
import { useState } from "react";
import NewPost from "./NewPost";
import classes from './PostList.module.css';
import Modal from "./Modal";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [textbody, setBody] = useState('');
  const [text, setText] = useState('');
  
  
  function hideModalHandler(){
    setModalIsVisible(false);
  }


  function changeBodyHandler(event){
    setBody(event.target.value); 
  }

  function changeTextHandler(event){
    setText(event.target.value); 
  }
 

  return (
    <>
     {modalIsVisible ? (

      <Modal onClose={hideModalHandler}>
      <NewPost 
          changeBody={changeBodyHandler} 
          changeText={changeTextHandler} 
      />
   </Modal> 
    ) : null}
    <ul className={classes.posts}>
    <Post  author={text} body={textbody}/> 
    <Post  author="Siddharth" body="Post anything"/> 
    </ul>
    </>
  )
}

export default PostList;