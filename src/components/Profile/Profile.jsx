import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import mainStyle from "../../App.module.css";
const Profile = (props) => {

    return (
        <div className={`${classes.content}  ${mainStyle.appWrapperContent}`}>
            <div>Profile</div>
            <ProfileInfo isOwner={props.isOwner}
                         img = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'
                         profile={props.profile}
                         status={props.status}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>);

}
export default Profile;