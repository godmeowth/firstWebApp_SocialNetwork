import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Chat/Message";
import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = props.state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessage = props.state.newMessageText
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    let onMessageChange = (e) => {
        let message = e.target.value;
        props.dispatch(updateMessageTextActionCreator(message))
    }
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElement}
                </div>
                <div className={classes.chat}>
                    {messagesElement}
                    <textarea value={newMessage} className={classes.textarea} onChange={onMessageChange} placeholder='Enter your message'/>
                    <button className={classes.button} onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>

    );
}
export default Dialogs;