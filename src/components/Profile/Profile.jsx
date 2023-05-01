import classes from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {

    return (
        <div className={classes.content}>
            <div>Profile</div>
            <ProfileInfo img = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif' profile={props.profile}/>
            <MyPostsContainer/>
        </div>);

}
export default Profile;