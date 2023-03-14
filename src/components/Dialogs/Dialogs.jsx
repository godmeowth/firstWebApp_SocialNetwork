import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Chat/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = props.state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessage = React.createRef()
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert (text)
    }
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElement}
                </div>
                <div className={classes.chat}>
                    {messagesElement}
                    <textarea ref={newMessage} className={classes.textarea}></textarea>
                    <button className={classes.button}>Send</button>
                </div>
            </div>
        </div>

    );
}
export default Dialogs;