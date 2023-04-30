import React from "react";
import classes from "./Users.module.css";
import UserPhoto from "../../assets/images/UsersICO.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return <div className={classes.content}>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? classes.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map((u) => (
            <div key={u.id} className={classes.users}>
                      <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                          <img src={u.photos.small != null ? u.photos.small : UserPhoto}/>
                       </NavLink>
                        </div>
                        <div>
                          {u.followed ? (
                              <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                  props.unfollow(u.id)
                              }}>Unfollow</button>
                          ) : (
                              <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                  props.follow(u.id)
                              }}>Follow</button>
                          )}
                        </div>
                      </span>
                <span>
                            <span>
                              <div className={classes.info}>{u.name}</div> <div>{u.status}</div>
                            </span>
                      </span>
            </div>
        ))}
    </div>
}
export default Users;