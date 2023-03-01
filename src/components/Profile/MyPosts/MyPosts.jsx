import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <Post message = 'Hi everyone, Who know good psychologiest'likes = '0'/>
            <Post message = 'WASSAP, I`VE JUST ATE MY MOTHER' likes = '0'/>
        </div>
    );
}
export default MyPosts;