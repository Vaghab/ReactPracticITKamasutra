import React from "react";
import style from "./NewPost.module.css";
import {
  addPostAC,
  updateNewPostAC,
} from "../../../../../redux/profilePage-reducer";

const NewPost = props => {
  // console.log(props);

  const newPostRef = React.createRef();

  const AddPost = () => {
    props.dispatch(addPostAC);
  };

  const onPostChange = () => {
    const text = newPostRef.current.value;
    props.dispatch(updateNewPostAC(text));
  };

  return (
    <div className={style.new__post}>
      <input
        className={style.textarea}
        ref={newPostRef}
        onChange={onPostChange}
        value={props.NewPostText}
      />
      <div className={style.btns}>
        <button className={style.btn__add} onClick={AddPost}>
          Add
        </button>
        <button className={style.btn__remove}>Remove</button>
      </div>
    </div>
  );
};

export default NewPost;
