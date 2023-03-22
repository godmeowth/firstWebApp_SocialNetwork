import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/reduxStore";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
