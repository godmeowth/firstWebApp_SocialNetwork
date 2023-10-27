import React from "react";
import {connect} from "react-redux";
import {follow,
    setCurrentPage,
    unfollow,
    requestUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/userSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUserCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchPropsType =  {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number)=>void
    follow: (userId: number)=>void
    setCurrentPage: (pageNumber: number)=>void
}

type OwnPropsType = {

}



type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType
class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress }
            /></>
    }
}

let mapStateToProps = (state: AppStateType ) : MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }

}


export default compose(connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers: requestUsers,})) (UsersContainer)
