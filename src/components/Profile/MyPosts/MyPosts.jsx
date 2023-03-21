import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    const avatar = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'
    let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} img={avatar} id={p.id} key={p.id}/>)
    let newPostElement = props.newPostText;
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div>
                <textarea value={newPostElement} className={classes.textarea} onChange={onPostChange}
                          placeholder='Enter your message'/>
                <button className={classes.button} onClick={onAddPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;