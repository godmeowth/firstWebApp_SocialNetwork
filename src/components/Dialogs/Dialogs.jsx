import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Chat/Message";
import React from "react";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
    let messagesElement = props.state.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}> Dialogs
                    {dialogsElement}
                </div>
                <div className={classes.chat}>Chat
                    {messagesElement}
                </div>
            </div>
        </div>

    );
}
export default Dialogs;