import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import UserPhoto from "../../assets/images/UsersICO.png"

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={classes.content}>
                {this.props.users.map((u) => (
                    <div key={u.id}>
          <span>
            <div>
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
              <div>{u.name}</div> <div>{u.status}</div>
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
