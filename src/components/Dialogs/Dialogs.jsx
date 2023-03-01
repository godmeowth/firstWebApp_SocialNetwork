import classes from "./Dialogs.module.css";
const Dialogs = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}> Dialogs
                    <div className={classes.dialog}>Tokhir</div>
                    <div className={classes.dialog}>Limon</div>
                    <div className={classes.dialog}>Sheva</div>
                </div>
                <div className={classes.chat}>Chat
                    <div className={classes.message}>Message 1</div>
                    <div className={classes.message}>Message 2</div>
                    <div className={classes.message}>Message 3</div>
                </div>
            </div>
        </div>

    );
}
export default Dialogs;