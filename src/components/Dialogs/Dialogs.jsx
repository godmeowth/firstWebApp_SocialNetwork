import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Chat/Message";
const Dialogs = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}> Dialogs
                    <Dialog name = 'Tokhir' id = '1'/>
                    <Dialog name = 'Limon'/>
                    <Dialog name = 'Sheva'/>
                </div>
                <div className={classes.chat}>Chat
                    <Message message = 'Hello Boba'/>
                    <Message message = 'ABobUs, PLeasSE give me MONEY'/>
                </div>
            </div>
        </div>

    );
}
export default Dialogs;