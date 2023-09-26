import classes from "./News.module.css";
import mainStyle from "./../../App.module.css"
import NewsItem from "./NewsItem/NewsItem";
import {getNews} from "../../redux/newsReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {useEffect} from "react";
const News = (props) => {
    useEffect(() => {
        props.getNews();
    }, []);
    return (
        <div className={`${classes.content}  ${mainStyle.appWrapperContent}`}>
            <div>
                {props.articles.map((article) => {return( <NewsItem
                    description={article.description}
                    title={article.title}
                    url={article.url}
                    urlToImage={article.urlToImage}/>) } ) }
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        articles: state.news.articles
    }
}
export default compose(
    connect(mapStateToProps, {getNews}) (News))