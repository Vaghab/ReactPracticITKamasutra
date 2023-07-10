import React from "react";
import style from "./Messages.module.css";
import {
  sendMessageAC,
  updateNewMessageAC,
} from "../../../../redux/dialogsPage-reducer";

const Messages = props => {
  const data = props.state.DialogsPage.MessagesData;
  const MessagesElements = data.map(m => {
    return (
      <div message={m.message} key={m.id}>
        {m.message}
      </div>
    );
  });
  let newMessage = props.state.DialogsPage.newMessageText;
  const sendMessage = () => {
    props.dispatch(sendMessageAC());
  };
  const newMessageChange = e => {
    let newText = e.target.value;
    props.dispatch(updateNewMessageAC(newText));
  };

  return (
    <>
      <div className={style.dialogMSGs}>{MessagesElements}</div>
      <div>
        <div>
          <textarea
            value={newMessage}
            onChange={newMessageChange}
            placeholder="enter your text"></textarea>
          <button onClick={sendMessage}>Send</button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Messages;
