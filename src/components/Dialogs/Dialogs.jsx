import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Chat/Message";

const Dialogs = (props) => {

    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}> Dialogs
                    {props.dialogs}
                </div>
                <div className={classes.chat}>Chat
                    {props.messages}
                </div>
            </div>
        </div>

    );
}
export default Dialogs;