import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.item}>
        <NavLink to="/profile" activeclassname={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeclassname={style.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/News" activeclassname={style.active}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Video" activeclassname={style.active}>
          Video
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Settings" activeclassname={style.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
