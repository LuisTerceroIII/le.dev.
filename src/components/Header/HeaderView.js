import React, { useState } from "react";
import "./Header.css";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const HeaderView = ({ menu }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={isOpen ? "header header-open" : "header"} onClick={()=> setOpen(prev => !prev)}>
      <nav
        className={
          isOpen
            ? "menu-items-container menu-items-container-show"
            : "menu-items-container"
        }
      >
      <ul className={'list-menu-container'}>
          {menu.map((item, key) => (
              <li key={key + 10} className={'menu-item'}>
                  <Link to={`${item.route}`} key={key}>
                      {item.htmlText}
                  </Link>
              </li>
          ))}
      </ul>
      </nav>
      <span className={"hamburger-button"}>
        <Hamburger
          size={40}
          toggled={isOpen}

          color={'#FFFFFF'}
          direction={"right"}
        />
      </span>
    </header>
  );
};

export default HeaderView;
