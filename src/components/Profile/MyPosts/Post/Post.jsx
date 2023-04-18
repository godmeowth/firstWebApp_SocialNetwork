import classes from './Post.module.css'
let likesIMG = 'https://img1.picmix.com/output/stamp/normal/4/7/2/6/1926274_baae9.gif'
const Post = (props ) => {
    return (
        <div className={classes.item}>
            <img src={props.img}/>
            {props.message}
            <div>
                    <span className={classes.dislike}>
                        <img src={likesIMG}/>
                        {props.likes}
                    </span>
            </div>
        </div>
    );
}
export default Post;