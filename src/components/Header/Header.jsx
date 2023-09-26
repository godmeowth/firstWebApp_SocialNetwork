import classes from './Header.module.css'

import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={`${classes.header}`}>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout} className={classes.button}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
            <div className={classes.item }>Why we still here...</div>

        </header>
    );
}
export default Header;