import React from "react";
import {sendMessageActionCreator } from "../../redux/dialogsReducer";
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
        sendMessage: (newMessage) => {dispatch(sendMessageActionCreator(newMessage))}
    }
}

export default compose(
    connect(mapStateToProps, mapsDispatchToProps),
    withAuthRedirect,
)(Dialogs);