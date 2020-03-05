import React from 'react';
import {sendMessageActionCreator, changeMessageActionCreator} from "../../redux/reducers/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    dialogsData: state.messagesPage,
});

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onChangeMessage: (text) => {
            dispatch(changeMessageActionCreator(text));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);