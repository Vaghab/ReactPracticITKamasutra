import React from "react";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import style from "./Posts.module.css";

const Posts = props => {
  const data = props.PostsData;
  const PostsElements = data.map(p => {
    return <Post message={p.message} likesCount={p.likesCount} key={p.id} />;
  });

  return (
    <div className={style.posts}>
      <NewPost dispatch={props.dispatch} />
      <div className={style.allPosts}>{PostsElements}</div>
    </div>
  );
};

export default Posts;
