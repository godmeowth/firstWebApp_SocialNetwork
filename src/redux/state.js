let rerenderEntireTree = () => {
    console.log('tree rerendered')
}
let state = {
    postsPage:{
        posts: [
            {id: 1,  message: 'Hi everyone, Who know good psychologist', likesCount: 12},
            {id: 2, message: 'WASSAP, I`VE JUST ATE MY MOTHER', likesCount: 20}
        ],
        newPostText: ''
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

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.postsPage.newPostText,
        likesCount: 0,
    };
    state.postsPage.posts.push(newPost);
    state.postsPage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.postsPage.newPostText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}
export default state;