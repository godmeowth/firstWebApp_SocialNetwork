import classes from "./Message.module.css";

const Message = (props) => {
    return (
        <div>
            <div className={classes.messages}>{props.message}</div>
        </div>


    );
}

export default Message;