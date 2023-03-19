const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}
const DialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let newLetter = {
                id: 3,
                message: state.newMessageText,
            }
            state.newMessageText = '';
            state.messages.push(newLetter);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
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

export default DialogsReducer;