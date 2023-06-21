import React from "react";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import style from "./Content.module.css";
import { Route, Routes } from "react-router-dom";

const Content = props => {
  const data = props.Data.state;
  return (
    <div className={style.content}>
      <Routes>
        <Route
          path="/profile"
          element={<Profile Data={data.ProfilePage} AddPost={props.AddPost} />}
        />
        <Route path="/dialogs" element={<Dialogs Data={data.DialogsPage} />} />
      </Routes>
    </div>
  );
};

export default Content;
