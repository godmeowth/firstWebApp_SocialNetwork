import React from "react";
import classes from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return <div className={classes.content}>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                   totalUserCount={props.totalUserCount} pageSize={props.pageSize}/>
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