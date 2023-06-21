import { Rerender } from "../render";

let MessagesData = [
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
];
let DialogUserData = [
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
];
let PostsData = [
  {
    message: "Чё там леее???",
    likesCount: 20,
  },
  { message: "Ниче, а там че лэээ???", likesCount: 10 },
];

let state = {
  ProfilePage: { PostsData },
  DialogsPage: { DialogUserData, MessagesData },
};

const AddPost = PostMessage => {
  let newPost = {
    id: 5,
    message: PostMessage,
    likesCount: 0,
  };
  state.ProfilePage.PostsData.push(newPost);
  Rerender(state);
};

export { AddPost };

export default state;
