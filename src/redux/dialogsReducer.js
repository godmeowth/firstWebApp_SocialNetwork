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
            let newLetter = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id:4, message: newLetter}]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
           return {
               ...state,
               newMessageText: action.newMessage
           }
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