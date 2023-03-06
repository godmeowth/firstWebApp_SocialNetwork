import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import Post from "./components/Profile/MyPosts/Post/Post";
import Dialog from "./components/Dialogs/Dialog/Dialog";
import Message from "./components/Dialogs/Chat/Message";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App state = {state}/>
  </React.StrictMode>
);
reportWebVitals();
