import React from "react";
import classes from "./Users.module.css";
import UserPhoto from "../../assets/images/UsersICO.png";
import {NavLink} from "react-router-dom";
let User= ({user, followingInProgress, unfollow, follow}) => {
    return <div className={classes.users}>
                      <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                          <img src={user.photos.small != null ? user.photos.small : UserPhoto}/>
                       </NavLink>
                        </div>
                        <div>
                          {user.followed ? (
                              <button className={classes.button54} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</button>
                          ) : (
                              <button className={classes.button54} disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>
                          )}
                        </div>
                      </span>
                <span>
                            <span className={classes.info}>
                              <div >{user.name}</div> <div>{user.status}</div>
                            </span>
                      </span>
            </div>
}
export default User;