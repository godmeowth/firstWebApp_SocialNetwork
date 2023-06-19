import React from "react";
import classes from "../../Users/Users.module.css";
let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return(
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? classes.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>)

}
export default Paginator;