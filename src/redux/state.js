import DialogsPageReducer from "./dialogsPage-reducer";
import ProfilePageReducer from "./profilePage-reducer";
import SideBarReducer from "./sideBar-reducer";

let store = {
  _state: {
    DialogsPage: {
      MessagesData: [
        {
          id: "1",
          message: "Че там лэ?",
        },
        {
          id: "2",
          message: "Че молчишь?",
        },
        {
          id: "3",
          message: "Молчишь - в ж*пе торчишь",
        },
      ],
      DialogUserData: [
        {
          id: "magomed",
          name: "Магомед",
        },
        {
          id: "cutjella",
          name: "Кутжела",
        },
        {
          id: "shax_i_mat",
          name: "Шахиридаза",
        },
      ],
      newMessageText: "",
    },
    ProfilePage: {
      PostsData: [
        {
          message: "Чё там леее???",
          likesCount: 20,
        },
        { message: "Ниче, а там че лэээ???", likesCount: 10 },
      ],
      NewPostText: "",
    },
    sidebar: {},
  },

  _Rerender() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._Rerender = observer;
  },

  dispatch(action) {
    this._state.ProfilePage = ProfilePageReducer(
      this._state.ProfilePage,
      action
    );
    this._state.DialogsPage = DialogsPageReducer(
      this._state.DialogsPage,
      action
    );
    this._state.sidebar = SideBarReducer(this._state.sidebar, action);

    this._Rerender(this._state);
  },
};

export default store;
window.store = store;
