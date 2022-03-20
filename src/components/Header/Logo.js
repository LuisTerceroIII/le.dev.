import React, {Fragment, useEffect, useState} from 'react';
import Hamburger from "hamburger-react";

const Logo = ({containerClass,logoClass}) => {
    return (
        <span className={containerClass}>
            <h1 className={logoClass}>LE.DEV.</h1>
        </span>

    );
};

export default Logo;