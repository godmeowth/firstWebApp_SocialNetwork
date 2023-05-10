import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.large} ></img>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}
export default ProfileInfo;