import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, {addPost, subscribe, updateNewPostText} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>
    );
    reportWebVitals();
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

