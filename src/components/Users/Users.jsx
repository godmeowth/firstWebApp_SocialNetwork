import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import UserPhoto from "../../assets/images/UsersICO.png"

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setUsersTotalCount(response.data.totalCount)
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = [];
        for( let i = 1; i <= 10; i++){
            pages.push(i)
        }
        return (
            <div className={classes.content}>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && classes.selectedPage}
                        onClick={() => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {this.props.users.map((u) => (
                    <div key={u.id} className={classes.users}>
                      <span>
                        <div className={classes.avatar}>
                          <img src={u.photos.small != null ? u.photos.small : UserPhoto}/>
                        </div>
                        <div>
                          {u.followed ? (
                              <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                          ) : (
                              <button onClick={() => this.props.follow(u.id)}>Follow</button>
                          )}
                        </div>
                      </span>
                        <span>
                            <span>
                              <div className={classes.info}>{u.name}</div> <div>{u.status}</div>
                            </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            {" "}
                            <div>{"u.location.country"}</div>
                        </span>
                      </span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
