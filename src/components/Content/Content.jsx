import React from "react";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import style from "./Content.module.css";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div className={style.content}>
      {/* <Dialogs /> */}
      {/* <Profile /> */}
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/dialogs" element={<Dialogs />} />
      </Routes>
    </div>
  );
};

export default Content;
