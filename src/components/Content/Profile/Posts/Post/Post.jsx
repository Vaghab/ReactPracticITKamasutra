import React from "react";
import style from "./Post.module.css";

const Post = props => {
  return (
    <div className={style.post}>
      <img
        src="https://static10.tgstat.ru/channels/_0/a3/a322d8673e40b4567b49a99aaf798b9a.jpg"
        alt="#"
        className={style.post__ava}></img>
      <div className={style.post__container}>
        <div className={style.nickName}>NickName</div>
        <span className={style.post__text}>{props.message}</span>
        <div className={style.likes}>
          <div className={style.likes__img} />
          <button className={style.post__btn_like}>
            {props.likesCount} like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
