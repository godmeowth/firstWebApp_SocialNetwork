import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
let mapsDispatchToProps = (dispatch) => {
    return{
        updateNewMessage: (message) => {dispatch(updateMessageTextActionCreator(message))},
        sendMessage: () => {dispatch(sendMessageActionCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapsDispatchToProps)(Dialogs);
export default DialogsContainer;