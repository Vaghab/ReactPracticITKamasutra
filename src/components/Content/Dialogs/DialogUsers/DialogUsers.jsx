import React from "react";
import style from "./DialogUsers.module.css";

const DialogUsers = props => {
  const data = props.DialogUserData;
  const DialogUserElements = data.map(d => {
    return (
      <div id={d.id} name={d.name} key={d.id}>
        {d.name}
      </div>
    );
  });

  return (
    <>
      <div className={style.dialogUsers}>{DialogUserElements}</div>
    </>
  );
};

export default DialogUsers;
