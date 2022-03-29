import React, { useState } from "react";
import Logo from "./Logo";
import "./Header.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const HeaderView = ({ menu }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={isOpen ? "header header-open" : "header"}>
      <Logo
        containerClass={"container-logo-compo"}
        logoClass={"logo"}
        hamburgerClass={"hamburger-button"}
      />
      <nav
        className={
          isOpen
            ? "menu-items-container menu-items-container-show"
            : "menu-items-container"
        }
      >
        {menu.map((item, key) => (
          <li key={key + 10} className={'menu-item'}>
            <Link to={`${item.route}`} key={key}>
              {item.htmlText}
            </Link>
          </li>
        ))}
      </nav>
      <span className={"hamburger-button"}>
        <Hamburger
          size={60}
          toggled={isOpen}
          toggle={setOpen}
          color={'#FFFFFF'}
          direction={"right"}
        />
      </span>
    </header>
  );
};

export default HeaderView;
