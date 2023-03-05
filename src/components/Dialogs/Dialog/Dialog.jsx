import classes from "./Dialog.module.css";
import {BrowserRouter, NavLink} from "react-router-dom";
const Dialog = (props) => {
  return(
      <div className={classes.dialog}>
          <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
      </div>
  );
}
export default Dialog;