import React from "react";
import classes from "./Users.module.css";
import User from "./User";
import PaginatorALT from "../common/Paginator/PaginatorALT";
import mainStyle from "../../App.module.css";
import {UserType} from "../../types/types";

type PropsType = {
    currentPage: number
    onPageChanged: (PageNumber: number) => void
    totalUserCount: number
    pageSize: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) =>  void
}

let Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalUserCount,
                                      pageSize, users,...props}) => {
    return <div className={`${classes.content}  ${mainStyle.appWrapperContent}`}>
        <PaginatorALT currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUserCount} pageSize={pageSize}/>
        {users.map((u) => (<User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}/>
        ))}
    </div>
}
export default Users;