import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return(
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState().dialogsPage
                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator())
                }
                let onMessageChange = (message) => {
                    store.dispatch(updateMessageTextActionCreator(message))
                }
                return <Dialogs updateNewMessage={onMessageChange}
                                onMessageClick={sendMessage}
                                dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default DialogsContainer;