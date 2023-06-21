import React from "react";
import style from "./Messages.module.css";

// const MessagesData = [
//   {
//     id: "1",
//     message: "Че там лэ?",
//   },
//   {
//     id: "2",
//     message: "Че молчишь?",
//   },
//   {
//     id: "3",
//     message: "Молчишь - в ж*пе торчишь",
//   },
// ];

const Messages = props => {
  const data = props.MessagesData;
  const MessagesElements = data.map(m => {
    return (
      <div message={m.message} key={m.id}>
        {m.message}
      </div>
    );
  });

  return (
    <>
      <div className={style.dialogMSGs}>{MessagesElements}</div>
    </>
  );
};

export default Messages;
