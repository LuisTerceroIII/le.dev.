import React, {useEffect, useState} from 'react';
import HeaderView from "./HeaderView";

const Header = () => {

    const menu = ["Home", "About me", "Education", "Specialities", "Technologies", "Projects", "Contact"]



    return (
        <HeaderView menu={menu} />
    );
};

export default Header;