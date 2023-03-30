import classes from './NewPost.module.css'
import { useState } from 'react';

function NewPost({onCancel, onAddPost}) {

  const [textbody, setBody] = useState('');
  const [text, setText] = useState('');
  
  function changeBodyHandler(event){
    setBody(event.target.value); 
  }

  function changeTextHandler(event){
    setText(event.target.value); 
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: textbody, 
      author: text
    };
    
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler} >
        <p>
            <label htmlFor="body">Text</label>
            <textarea  id=""  required rows={3} onChange={changeBodyHandler} />
        </p>
        <p>
             <label htmlFor="name" >Your Name</label>
             <input type="text" required onChange={changeTextHandler} />
        </p>
        <p className={classes.actions}>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
       
    </form>
  )
}

export default NewPost