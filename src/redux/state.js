const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let store = {
    _state: {
        postsPage: {
            posts: [
                {id: 1, message: 'Hi everyone, Who know good psychologist', likesCount: 12},
                {id: 2, message: 'WASSAP, I`VE JUST ATE MY MOTHER', likesCount: 20}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello Boba'},
                {id: 2, message: 'BOBUS'},
            ],
            newMessageText: '',
            dialogs: [
                {id: 1, name: 'Tokhir'},
                {id: 2, name: 'Limon'},
                {id: 3, name: 'Sheva'},
            ],
        },
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('tree rerendered')
    },
    subscribe(observer) {
        this._callSubscriber= observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.postsPage.newPostText,
                likesCount: 0,
            };
            this._state.postsPage.posts.push(newPost);
            this._state.postsPage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.postsPage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type === 'SEND-MESSAGE'){
            let newLetter = {
                id: 3,
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newLetter);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT ,
        newText: text,
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateMessageTextActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: message,
    }
}

export default store
window.store = store