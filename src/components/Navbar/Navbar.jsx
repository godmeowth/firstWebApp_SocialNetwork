import classes from './Navbar.module.css';
import profile from "../Profile/Profile";
import {NavLink} from "react-router-dom";
const activeLink = ({isActive}) => isActive ? classes.active : classes.item;
const Navbar = () => {
   return( <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' className={activeLink}> Profile</NavLink>
        </div>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/dialogs'className={({ navData }) =>(navData ? classes.active : classes.item)}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news'>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings'>Settings</NavLink>
        </div>
    </nav> );
}
export default Navbar;