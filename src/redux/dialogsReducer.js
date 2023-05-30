const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 1, message: 'Hello Boba'},
        {id: 2, message: 'BOBUS'},
    ],
    dialogs: [
        {id: 1, name: 'Tokhir'},
        {id: 2, name: 'Limon'},
        {id: 3, name: 'Sheva'},
    ],
}
const DialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let newLetter = action.newMessage
            return {
                ...state,
                messages: [...state.messages, {id:4, message: newLetter}]
            };
        default:
            return state;
    }
}
export const sendMessageActionCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE, newMessage
    }
}

export default DialogsReducer;