import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </React.StrictMode>
    );
    reportWebVitals();
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
})

