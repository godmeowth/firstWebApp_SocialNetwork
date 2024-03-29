import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import styles from "../Dialogs.module.css";
import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const addMessageForm = (props) => {
    const maxLength50 = maxLengthCreator(50)
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   validate={[required, maxLength50]}
                   name={'newMessage'}
                   placeholder={'Enter your message'}
                   className={styles.textarea}/>
        </div>
        <button className={styles.button}>Send</button>
    </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(addMessageForm)