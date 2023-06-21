import React from "react";
import style from "./Dialogs.module.css";
import DialogUsers from "./DialogUsers/DialogUsers";
import Messages from "./Messages/Messages";

const Dialogs = props => {
  const data = props.Data;
  return (
    <>
      <div className={style.dialogs}>
        <DialogUsers DialogUserData={data.DialogUserData} />
        <Messages MessagesData={data.MessagesData} />
      </div>
    </>
  );
};

export default Dialogs;
