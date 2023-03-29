import React, { useEffect } from "react";
import classes from "./Users.module.css";
import axios from "axios";
import UserPhoto from "../../assets/images/UsersICO.png"

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response) => {
                    props.setUsers(response.data.items);
                });
        }
    }

    return (
        <div className={classes.content}>
            <button onClick={getUsers}>GET USERS</button>
            {props.users.map((u) => (
                <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small: UserPhoto}/>
            </div>
            <div>
              {u.followed ? (
                  <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                  <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
                    <span>
            <span>
              <div>{u.name}</div> <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>{" "}
                <div>{"u.location.country"}</div>
            </span>
          </span>
                </div>
            ))}
        </div>
    );
};

export default Users;
