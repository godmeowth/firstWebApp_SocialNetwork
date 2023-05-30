import classes from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Chat/Message";
import React from "react";
import {Navigate} from "react-router-dom";
import {Field, reduxForm, values} from "redux-form";



const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElement = state.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>)
    let messagesElement = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>)

    let addNewMessage = (values) => {
        alert(values.newMessage)
        props.sendMessage(values.newMessage);
    }

    if (!props.isAuth) return <Navigate to={"/login"}/>

    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElement}
                </div>
                <div className={classes.chat}>
                    <div>{messagesElement}</div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>

    );
}

const addMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'newMessage'} placeholder={'Enter your message'}/>
        </div>
        <button className={classes.button}>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)
export default Dialogs;