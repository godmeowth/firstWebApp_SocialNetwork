import React, {useState} from "react";
import classes from "../../Users/Users.module.css";

let portionSize = 10
let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div> {slicedPages.map((page, id) => {
            return <span
                key={id} className={currentPage === page ? classes.selectedPage :' '}
                onClick={() => {
                    onPageChanged(page)
                }}>{page}
                </span>
        })}
        </div>
    )
}
export default Paginator;