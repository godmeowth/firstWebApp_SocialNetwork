import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
    }
}
let mapsDispatchToProps = (dispatch) => {
    return{
        updateNewMessage: (message) => {dispatch(updateMessageTextActionCreator(message))},
        sendMessage: () => {dispatch(sendMessageActionCreator())}
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapsDispatchToProps)(AuthRedirectComponent);
export default DialogsContainer;