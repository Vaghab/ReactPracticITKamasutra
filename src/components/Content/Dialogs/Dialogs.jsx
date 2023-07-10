import React from "react";
import style from "./Dialogs.module.css";
import DialogUsers from "./DialogUsers/DialogUsers";
import Messages from "./Messages/Messages";

const Dialogs = props => {
  return (
    <>
      <div className={style.dialogs}>
        <DialogUsers DialogUserData={props.state.DialogUserData} />
        <Messages MessagesData={props.state.MessagesData} />
      </div>
    </>
  );
};

export default Dialogs;
