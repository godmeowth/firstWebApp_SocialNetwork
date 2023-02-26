import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img src='https://64.media.tumblr.com/b7ada99b857f43494c72a159429e65fe/11629f9d223b201a-97/s1280x1920/ecc562fe403df410e8481a7379ccf0e5d6f262ec.gif'></img>
        </div>
        <MyPosts/>
    </div>);
}
export default Profile;