import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const avatar = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'
const MyPosts = () => {
    return (
        <div>
            <Post message = 'Hi everyone, Who know good psychologiest'likes = '0' img = {avatar}/>
            <Post message = 'WASSAP, I`VE JUST ATE MY MOTHER' likes = '0' img = {avatar}/>
        </div>
    );
}
export default MyPosts;