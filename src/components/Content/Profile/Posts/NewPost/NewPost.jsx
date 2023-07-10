import React from "react";
import style from "./NewPost.module.css";

const NewPost = props => {
  const newPostRef = React.createRef();

  const AddPost = () => {
    let text = newPostRef.current.value;
    props.dispatch({ type: "ADD-POST" });
  };

  const onPostChange = () => {
    const text = newPostRef.current.value;
    const action = { type: "UPDATE-NEW-POST", NewPostText: text };
    props.dispatch(action);
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
