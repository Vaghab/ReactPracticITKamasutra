import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        className={style.logo}
        src="https://images.squarespace-cdn.com/content/v1/58a9a34f1b631b5940682ae3/1508160079376-LQZNVV3S6SA2RV19Z85A/sony-ce-logo.png"
        alt="#"></img>
    </header>
  );
};

export default Header;
