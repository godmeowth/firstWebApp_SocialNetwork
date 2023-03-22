import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapDispatchToPropsFactory = (dispatch) => {
    return{
        updateNewPostText: (text)=> {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        },
    }
}
const mapStateToPropsFactory = (state) => {
    return{
        newPostText: state.postsPage.newPostText,
        posts: state.postsPage.posts,
    }
}

const MyPostsContainer = connect(mapDispatchToPropsFactory, mapStateToPropsFactory)(MyPosts)
export default MyPostsContainer;