import React from "react";
import style from "./Dialogs.module.css";
import DialogUsers from "./DialogUsers/DialogUsers";
import Messages from "./Messages/Messages";

const Dialogs = props => {
  return (
    <>
      <div className={style.dialogs}>
        <DialogUsers state={props.state} />
        <Messages state={props.state} dispatch={props.dispatch} />
      </div>
    </>
  );
};

export default Dialogs;
