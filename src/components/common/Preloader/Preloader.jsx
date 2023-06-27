import React from "react";
import styles from "./Preloader.module.css"

let Preloader = (props) => {
    return <div>
        <img className={styles.img} src={'https://i.pinimg.com/originals/fa/6a/a8/fa6aa8b9f02691e42df56f1678e795fc.gif'}/>
    </div>
}

export default Preloader