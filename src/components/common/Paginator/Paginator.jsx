import React, {useState} from "react";
import classes from "../../Users/Users.module.css";

let portionSize = 10
let Paginator = (props) => {
    let pageCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber + portionSize

    return<div>
        {portionNumber > 1 &&
            <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>previous</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <span key={p} className={props.currentPage === p ? classes.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>next</button>}
        </div>

}
export default Paginator;