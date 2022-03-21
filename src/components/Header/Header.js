import React from "react";
import HeaderView from "./HeaderView";

const Header = () => {

  const menuAndPaths = [
    {
      htmlText: "Home",
      route: "/",
    },
    {
      htmlText: "About me",
      route: "/aboutme",
    },
    {
      htmlText: "Education",
      route: "/education",
    },
    {
      htmlText: "Specialities",
      route: "/specialities",
    },
    {
      htmlText: "Technologies",
      route: "/technologies",
    },
    {
      htmlText: "Projects",
      route: "/projects",
    },
    {
      htmlText: "Contact",
      route: "/contact",
    },
  ];

  return <HeaderView menu={menuAndPaths} />;
};

export default Header;
