import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        newPostText: state.postsPage.newPostText,
        posts: state.postsPage.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text)=> {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)
export default MyPostsContainer;