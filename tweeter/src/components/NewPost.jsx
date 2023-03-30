import classes from './NewPost.module.css'

function NewPost(props) {
  return (
    <form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea  id=""  required rows={3} onChange={props.changeBody} />
        </p>
        <p>
             <label htmlFor="name" >Your Name</label>
             <input type="text" required onChange={props.changeText} />
        </p>
        <p className={classes.actions}>
          <button>Cancel</button>
          <button>Submit</button>
        </p>
       
    </form>
  )
}

export default NewPost