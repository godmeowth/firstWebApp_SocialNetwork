import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state = {store.getState()}
                 addPost = {store.addPost.bind(store)}
                 updateNewPostText = {store.updateNewPostText.bind(store)}/>
        </React.StrictMode>
    );
    reportWebVitals();
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

