import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={classes.img}>
            <img src={props.img}></img>
        </div>
    );
}
export default ProfileInfo;