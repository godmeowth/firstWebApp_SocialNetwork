import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div>Profile</div>
            <ProfileInfo img = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'/>
            <MyPosts state = {props.state} dispatch = {props.dispatch} />
        </div>);
}
export default Profile;