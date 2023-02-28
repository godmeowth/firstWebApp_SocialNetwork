import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img src='https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'></img>
        </div>
        <MyPosts/>
    </div>);
}
export default Profile;