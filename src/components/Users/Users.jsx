import React from "react";
import classes from "./Users.module.css";
import User from "./User";
import PaginatorALT from "../common/Paginator/PaginatorALT";
import mainStyle from "../../App.module.css";

let Users = (props) => {
    return <div className={`${classes.content}  ${mainStyle.appWrapperContent}`}>
        <PaginatorALT currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalItemsCount={props.totalUserCount} pageSize={props.pageSize}/>
        {props.users.map((u) => (<User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}/>
        ))}
    </div>
}
export default Users;