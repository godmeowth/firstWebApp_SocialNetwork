import React, {useState} from "react";
import classes from './Post.module.css'
let likesIMG = 'https://img1.picmix.com/output/stamp/normal/4/7/2/6/1926274_baae9.gif'
const Post = (props ) => {
    const [likes, setLikes] = useState(props.likes)
    const like = () => {
        setLikes(likes + 1 )
    }
    return (
        <div className={classes.item}>
            <img src={props.img}/>
            {props.message}
            <div>
                    <span className={classes.dislike}>
                        <img src={likesIMG} onClick={like} />
                        {likes}
                    </span>
            </div>
        </div>
    );
}
export default Post;