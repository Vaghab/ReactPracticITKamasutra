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

  AddPost() {
    let newPost = {
      id: 5,
      message: this._state.ProfilePage.NewPostText,
      likesCount: 0,
    };
    this._state.ProfilePage.PostsData.push(newPost);
    this._state.ProfilePage.NewPostText = "";
    this._Rerender(this._state);
  },
  UpdateNewPostText(NewText) {
    this._state.ProfilePage.NewPostText = NewText;
    this._Rerender(this._state);
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.ProfilePage.NewPostText,
        likesCount: 0,
      };
      this._state.ProfilePage.PostsData.push(newPost);
      this._state.ProfilePage.NewPostText = "";
      this._Rerender(this._state);
    } else if (action.type === "UPDATE-NEW-POST") {
      this._state.ProfilePage.NewPostText = action.NewPostText;
      this._Rerender(this._state);
    }
  },
};

export default store;
window.store = store;
