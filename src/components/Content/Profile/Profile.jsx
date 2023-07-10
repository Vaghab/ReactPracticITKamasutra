import React from "react";
import Posts from "./Posts/Posts";
import style from "./Profile.module.css";
import Description from "./Description/Description";

const Profile = props => {
  return (
    <div className={style.profile}>
      <img
        className={style.profile__BGIMG}
        src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614636857_78-p-fon-gori-dlya-fotoshopa-102.jpg"
        alt="#"
      />
      <div className={style.profile__container}>
        <Description
          avatar="https://android-obzor.com/wp-content/uploads/2022/03/chto-nuzhno-znat-pro-introverta-yesli-on-vash-partner_1-1.jpg"
          name="Artur Levinsky"
          about="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqu fugiat nulla pariatur dolore magna aliqua. Ut enim ad minim veniam, quis nostr placeholder text et dolore magna aliqu fug no varto. Ut enim ad minim veniam, quis nost"
        />
        <Posts
          PostsData={props.ProfilePage.PostsData}
          NewPostText={props.ProfilePage.NewPostText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Profile;
