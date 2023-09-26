import axios from "axios";

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {"X-Api-Key": "1c2df7eecefc4643980ad4f8567f3150"},
}
)
export const newsAPI ={
    getNewsData () {
        return instance.get('top-headlines?country=us&pageSize=2')
    }
}