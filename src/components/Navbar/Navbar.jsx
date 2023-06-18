import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.active}>
          Dialogs
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/News" activeClassName={style.active}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Video" activeClassName={style.active}>
          Video
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/Settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
