import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
  return(
      <div className={s.message}>
          {props.message}
      </div>
      )
};

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id="1" name="Vova"/>
                <DialogItem id="2" name="Nick"/>
                <DialogItem id="3" name="Sasha"/>
                <DialogItem id="4" name="Vanya"/>
                <DialogItem id="5" name="David"/>
            </div>
            <div className={s.messages}>
               <Message message="Hello"/>
               <Message message="Hi"/>
               <Message message=")))))))))))))"/>
            </div>
        </div>
    )
};
export default Dialogs;