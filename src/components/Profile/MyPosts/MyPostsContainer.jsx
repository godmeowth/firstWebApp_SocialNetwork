import React from "react";
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPostElement)=>{
            dispatch(addPostActionCreator(newPostElement))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)
export default MyPostsContainer;