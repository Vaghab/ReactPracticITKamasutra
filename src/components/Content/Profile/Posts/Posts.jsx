import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={style.posts}>
      <NewPost />
      <div className={style.allPosts}></div>
      <Post message="Чё там леее???" likesCount="20" />
      <Post message="Ниче, а там че лэээ???" likesCount="10" />
    </div>
  );
};

export default Posts;
