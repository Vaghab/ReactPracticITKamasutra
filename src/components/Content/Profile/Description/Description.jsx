import React from "react";
import style from "./Description.module.css";

const Description = props => {
  return (
    <div className={style.description}>
      <img className={style.description__ava} src={props.avatar} alt="#" />
      <div className={style.description__info}>
        <div className={style.description__name}>{props.name}</div>
        <div className={style.description__about}>{props.about}</div>
      </div>
    </div>
  );
};

export default Description;
