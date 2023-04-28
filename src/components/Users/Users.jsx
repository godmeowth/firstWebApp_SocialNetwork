import React from "react";
import classes from "./Users.module.css";
import UserPhoto from "../../assets/images/UsersICO.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return <div className={classes.content}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
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

                                  props.toggleFollowingProgress(true, u.id);

                                  axios
                                      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true})
                                      .then((response) => {
                                          if(response.data.resultCode == 0){
                                              props.unfollow(u.id)
                                          }
                                          props.toggleFollowingProgress(false, u.id);
                                      });


                              }}>Unfollow</button>
                          ) : (
                              <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>{

                                  props.toggleFollowingProgress(true, u.id)

                                  axios
                                      .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true})
                                      .then((response) => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                      });
                              }}>Follow</button>
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
}
export default Users;