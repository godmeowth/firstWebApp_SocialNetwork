import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm, values} from "redux-form";

const PostForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newPostElement'} placeholder='Enter your message'/>
            <button className={classes.button} >Add post</button>
        </div>
    </form>
}

const PostFormRedux = reduxForm({form: 'addPost'})(PostForm)

const MyPosts = (props) => {
    const avatar = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} img={avatar} id={p.id} key={p.id}/>)
    let addNewPost=(values)=>{
        props.addPost(values.newPostElement);
    }

    return (
        <div>
            <div>
                <PostFormRedux onSubmit={addNewPost}/>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;