const DialogsPageReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE":
      state.newMessageText = action.newMessageText;
      return state;
    case "SEND-MESSAGE":
      let newMessageText = state.newMessageText;
      state.newMessageText = "";
      state.MessagesData.push({
        id: 6,
        message: newMessageText,
      });
      return state;
    default:
      return state;
  }
};

export const sendMessageAC = () => ({ type: "SEND-MESSAGE" });
export const updateNewMessageAC = text => ({
  type: "UPDATE-NEW-MESSAGE",
  newMessageText: text,
});

export default DialogsPageReducer;
