import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/avatar.gif";
import profile from "../Profile";
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
            console.log("onChage")
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData)
        setEditMode(false)
    }
    return (
        <div className={classes.profile}>
            <img src={props.profile.photos.large || UserPhoto}></img>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>: <ProfileData {...props} isOwner={props.isOwner} goToEditMode={()=>{setEditMode(true)}}/>}
            <div> status: <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/></div>
        </div>
    );

}

const ProfileData = (props) => {
    return <div>
        {props.isOwner && <div onClick={props.goToEditMode}><button>Edit</button></div>}
        <div>Full name: {props.profile.fullName}</div>
        <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
        {
            props.profile.lookingForAJob &&
            <>My CV: {props.profile.lookingForAJobDescription}</>
        }
        <div>About me: {props.profile.aboutMe}</div>
        <div>
            Contacts: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={classes.contact}>{contactTitle}: {contactValue}</div>
}
export default ProfileInfo;