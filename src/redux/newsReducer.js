import {newsAPI} from "../api/newsApi";

const GETNEWS = 'GETNEWS'

let initialState = {
    articles: []
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETNEWS:
            return{
                ...state,
                articles: action.articles,
            }
        default: return state
    }
}

export const getNewsSuccess = (articles) =>({type: GETNEWS, articles})

export const getNews = () => async (dispatch) => {
    let response = await newsAPI.getNewsData()
    if(response.status === 200){
        dispatch(getNewsSuccess(response.data.articles))
    }
}

export default newsReducer