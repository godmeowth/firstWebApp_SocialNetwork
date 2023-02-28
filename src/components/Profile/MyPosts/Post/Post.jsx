import classes from './Post.module.css'

const Post = (props ) => {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'/>
            {props.message}
            <div>
                    <span className={classes.dislike}>
                        <img src='https://i.pinimg.com/originals/bd/34/23/bd342367b384dc04c56e595288f3b31e.gif'/>
                    </span>
            </div>
        </div>
    );
}
export default Post;