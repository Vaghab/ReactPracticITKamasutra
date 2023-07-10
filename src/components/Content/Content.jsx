import React from "react";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import style from "./Content.module.css";
import { Route, Routes } from "react-router-dom";

const Content = props => {
  return (
    <div className={style.content}>
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              ProfilePage={props.state.ProfilePage}
              dispatch={props.dispatch}
            />
          }
        />
        <Route
          path="/dialogs"
          element={<Dialogs state={props.state} dispatch={props.dispatch} />}
        />
      </Routes>
    </div>
  );
};

export default Content;
