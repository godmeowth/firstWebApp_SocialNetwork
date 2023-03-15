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
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.postsPage.newPostText,
            likesCount: 0,
        };
        this._state.postsPage.posts.push(newPost);
        this._state.postsPage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.postsPage.newPostText = newText;
        this._callSubscriber(this._state);
    },
      subscribe(observer) {
        this._callSubscriber= observer
      },
}

export default store
window.store = store