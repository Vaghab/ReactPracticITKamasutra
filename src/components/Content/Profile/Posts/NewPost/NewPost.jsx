import React from "react";
import style from "./NewPost.module.css";

const NewPost = props => {
  const newPostRef = React.createRef();
  const AddPost = () => {
    let text = newPostRef.current.value;
    props.AddPost(text);
    // text = "";
  };
  return (
    <div className={style.new__post}>
      <input className={style.textarea} type="string" ref={newPostRef} />
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
