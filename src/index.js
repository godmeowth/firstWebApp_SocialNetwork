import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPosts/Post/Post";
import Dialog from "./components/Dialogs/Dialog/Dialog";
import Message from "./components/Dialogs/Chat/Message";

const root = ReactDOM.createRoot(document.getElementById('root'));


const avatar = 'https://i.pinimg.com/originals/1b/24/e1/1b24e1ee2242964e3e226f3bc0f16d35.gif'
let posts = [
    {id: 1, message: 'Hi everyone, Who know good psychologist', likesCount: 12},
    {id: 2, message: 'WASSAP, I`VE JUST ATE MY MOTHER', likesCount: 20}
]
let postsElements = posts.map( p => <Post message = {p.message} likes = {p.likesCount} img = {avatar} id = {p.id}/>)



let dialogs = [
    {id: 1, name: 'Tokhir'},
    {id: 2, name: 'Limon'},
    {id: 3, name: 'Sheva'}
]
let messages = [
    {id: 1, message: 'Hello Boba'},
    {id: 2, message: 'AAAARGHHH'},
]
let dialogsElement = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)
let messagesElement = messages.map(m => <Message message={m.message} id={m.id}/>)

root.render(
  <React.StrictMode>
      <App posts = {postsElements} dialogs = {dialogsElement} messages = {messagesElement}/>
  </React.StrictMode>
);
reportWebVitals();
