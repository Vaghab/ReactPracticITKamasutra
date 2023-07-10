const ProfilePageReducer = (state, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        message: state.NewPostText,
        likesCount: 0,
      };
      state.PostsData.push(newPost);
      state.NewPostText = "";
      return state;
    case "UPDATE-NEW-POST":
      state.NewPostText = action.NewPostText;
      return state;
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: "ADD-POST" });
export const updateNewPostAC = text => ({
  type: "UPDATE-NEW-POST",
  NewPostText: text,
});

export default ProfilePageReducer;
