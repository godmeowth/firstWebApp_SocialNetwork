import {rerenderEntireTree} from "../render";

let state = {
    postsPage:{
        posts: [
            {id: 1, message: 'Hi everyone, Who know good psychologist', likesCount: 12},
            {id: 2, message: 'WASSAP, I`VE JUST ATE MY MOTHER', likesCount: 20}
        ],
    },
    dialogsPage:{
        messages: [
            {id: 1, message: 'Hello Boba'},
            {id: 2, message: 'BOBUS' },
        ],
        dialogs: [
            {id: 1, name: 'Tokhir'},
            {id: 2, name: 'Limon'},
            {id: 3, name: 'Sheva'},
        ],
    },
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };
    state.postsPage.posts.push(newPost);
    rerenderEntireTree(state)
}
export default state;