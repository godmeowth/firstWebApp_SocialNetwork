import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = (message) => {
        props.store.dispatch(updateMessageTextActionCreator(message))
    }
    return <Dialogs updateNewMessage={onMessageChange} onMessageClick={sendMessage} dialogsPage={state}/>
}
export default DialogsContainer;