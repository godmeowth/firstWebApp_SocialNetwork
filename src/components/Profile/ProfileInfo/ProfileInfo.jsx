import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/avatar.gif";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.large || UserPhoto}></img>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
}
export default ProfileInfo;