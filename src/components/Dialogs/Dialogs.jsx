import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Chat/Message";
import React from "react";

const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessage = state.newMessageText
    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e) => {
        let message = e.target.value;
       props.updateNewMessage(message);
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