import React from "react";
import style from "./NewPost.module.css";
import { type } from "@testing-library/user-event/dist/type";

const NewPost = () => {
  return (
    <div className={style.new__post}>
      <input className={style.textarea} type="string" />
      <div className={style.btns}>
        <button className={style.btn__add}>Add</button>
        <button className={style.btn__remove}>Remove</button>
      </div>
    </div>
  );
};

export default NewPost;
