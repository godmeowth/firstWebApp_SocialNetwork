import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
const MyPosts = (props) => {
    const avatar = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'
    let postsElements = props.state.postsPage.posts.map(p => <Post message={p.message} likes={p.likesCount}  img={avatar} id={p.id} key={p.id}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} className={classes.textarea} onChange={onPostChange}/>
                <button className={classes.button} onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;