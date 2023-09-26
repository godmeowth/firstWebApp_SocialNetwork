import classes from "./NewsItem.module.css";
import {NavLink} from "react-router-dom";
const NewsItem = ({url,  urlToImage,  title, description}) => {
    return(
        <div className={classes.item}>
            <NavLink to={url}>
                <div className={classes.content}> <img className={classes.image} src={urlToImage ? urlToImage : "https://www.tuningblog.eu/pl/kategorie/samochody-z-az/aerocustom-widebody-mazda-6-253640/przywi%C4%85zanie/progresywny-sr-widebody-mazda-6-tuning-11/"}/>
                    <div className={classes.text}>
                        <p>{title} </p>
                        <p>{description}cause Nikita Pidor</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
export default NewsItem
