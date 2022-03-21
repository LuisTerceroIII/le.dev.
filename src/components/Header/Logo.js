import React, {Fragment, useEffect, useState} from 'react';
import Hamburger from "hamburger-react";
import {Link} from "react-router-dom";

const Logo = ({containerClass,logoClass}) => {
    return (
        <span className={containerClass}>
           <Link to={"/"} style={{textDecoration: "none", color:"#000000"}}>
               <h1 className={logoClass}>LE.DEV.</h1>
           </Link>
        </span>

    );
};

export default Logo;