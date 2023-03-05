import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
        <div>
            {props.posts}
        </div>
    );
}
export default MyPosts;