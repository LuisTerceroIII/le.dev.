import React from "react";
import "./Footer.css";

const FooterView = () => {
  return (
    <footer className="footer-container">
      <h6 className="footer-copyright-disclaimer">
        © 2022 Copyright:{" "}
        <a
            className={'footer-link-name'}
          href={
            "https://www.linkedin.com/in/luis-h%C3%A9ctor-espinoza-navarrete-bbb7b3140/"
          }
            target={'_blank'}
        >
          Luis Espinoza.
        </a>
        <br />
        luis.espinoza.na@gmail.com
      </h6>
    </footer>
  );
};

export default FooterView;
