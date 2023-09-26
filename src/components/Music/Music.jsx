import classes from "./Music.module.css";
import mainStyle from "./../../App.module.css"
const Music = (props) => {
    return (
        <div className={`${classes.content} ${mainStyle.appWrapperContent}`}>
            Music
        </div>
    );
}
export default Music;