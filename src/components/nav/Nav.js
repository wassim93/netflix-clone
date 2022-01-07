import React, { useEffect, useState } from "react";
import "./Nav.css";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={show ? "nav nav_black" : "nav"}>
      <img className="nav_logo" src={Logo} alt="Netflix Logo" />
      <img className="nav_avatar" src={Avatar} alt="Netflix Avatar" />
    </div>
  );
};

export default Nav;
