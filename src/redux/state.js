import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

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
            newMessageText: "",
            dialogs: [
                {id: 1, name: 'Tokhir'},
                {id: 2, name: 'Limon'},
                {id: 3, name: 'Sheva'},
            ],
        },
        sideBar: {},
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
        this._state.postsPage = profileReducer(this._state.postsPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state);
    },
}

export default store
window.store = store