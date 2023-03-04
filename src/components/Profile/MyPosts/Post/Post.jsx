import classes from './Post.module.css'
const Post = (props ) => {
    return (
        <div className={classes.item}>
            <img src={props.img}/>
            {props.message}
            <div>
                    <span className={classes.dislike}>
                        <img src='https://i.pinimg.com/originals/bd/34/23/bd342367b384dc04c56e595288f3b31e.gif'/>
                        {props.likes}
                    </span>
            </div>
        </div>
    );
}
export default Post;