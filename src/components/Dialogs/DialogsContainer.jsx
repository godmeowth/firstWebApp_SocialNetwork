import React from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapsDispatchToProps),
    withAuthRedirect,
)(Dialogs);