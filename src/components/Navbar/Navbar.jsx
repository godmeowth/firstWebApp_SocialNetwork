import classes from './Navbar.module.css';
import mainStyle from "./../../App.module.css"
import {NavLink} from "react-router-dom";
import {routes} from './routes'


const Navbar = () => {
    const isActiveHandler = (data) => {
        return data ? classes.active : classes.item
    }

    const navRouting = routes.map((el) => {
        return <div className={classes.item}  key={el.id}>
            <NavLink className={({isActive}) => isActiveHandler(isActive)} to={el.route}>
                {el.id[0].toUpperCase() + el.id.slice(1)}
            </NavLink>
        </div>
    })

    return(
        <nav className={`${classes.nav} ${mainStyle.appWraperNavbar}`}>
            {navRouting}
        </nav>
    );
}
export default Navbar;