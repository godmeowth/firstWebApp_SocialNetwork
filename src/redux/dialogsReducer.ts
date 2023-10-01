interface Message {
    id: number;
    message: string;
}

interface Dialog {
    id: number;
    name: string;
}

interface DialogsState {
    messages: Message[];
    dialogs: Dialog[];
}

// Define action type
const SEND_MESSAGE = 'SEND-MESSAGE';

interface SendMessageActionType {
    type: typeof SEND_MESSAGE;
    newMessage: string;
}

type ActionTypes = SendMessageActionType;

// Initial state
const initialState: DialogsState = {
    messages: [
        { id: 1, message: 'Hello Boba' },
        { id: 2, message: 'BOBUS' },
    ],
    dialogs: [
        { id: 1, name: 'Tokhir' },
        { id: 2, name: 'Limon' },
        { id: 3, name: 'Sheva' },
    ],
};

// Reducer
const DialogsReducer = (state = initialState, action: ActionTypes): DialogsState => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: state.messages.length + 1, message: action.newMessage }],
            };
        default:
            return state;
    }
};

// Action creator
export const sendMessageActionCreator = (newMessage: string): SendMessageActionType => ({
    type: SEND_MESSAGE,
    newMessage,
});

export default DialogsReducer;