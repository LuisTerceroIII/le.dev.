import React from 'react';
import FooterView from "./FooterView";

const Footer = () => {

    const year = new Date().getFullYear();
    return (
      <FooterView year={year}/>
    );
};

export default Footer;