import React from "react";
import "./Footer.css";

const FooterView = ({year}) => {

  return (
    <footer className="footer-container">
      <p className="footer-copyright-disclaimer">
        © {year} Copyright:{" "}
        <a
          className={"footer-link-name"}
          href={
            "https://www.linkedin.com/in/luis-h%C3%A9ctor-espinoza-navarrete-bbb7b3140/"
          }
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Luis Espinoza.
        </a>
        <br />
        luis.espinoza.na@gmail.com
        <a
          href={"https://github.com/LuisTerceroIII?tab=repositories"}
          className={"github-link"}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          <img className={"github"} src={"./github.png"} alt={"github"} />
        </a>
      </p>
    </footer>
  );
};

export default FooterView;
