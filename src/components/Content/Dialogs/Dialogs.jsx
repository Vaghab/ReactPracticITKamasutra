import React from "react";
import style from "./Dialogs.module.css";

const DialogName = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div to={path} className={style.dialogName}>
      {props.name}
    </div>
  );
};

const Message = props => {
  return <div className={style.dialogMSG}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <>
      <div className={style.dialogs}>
        <div className={style.dialogNames}>
          <DialogName name="Магомед" id="magomed" />
          <DialogName name="Кутжела" id="cutjella" />
          <DialogName name="Шахиридаза" id="shax_i_mat" />
        </div>
        <div className={style.dialogMSGs}>
          <Message message="Че там лэ?" />
          <Message message="Че молчишь?" />
          <Message message="Молчишь - в ж*пе торчишь" />
        </div>
      </div>
    </>
  );
};

export default Dialogs;
