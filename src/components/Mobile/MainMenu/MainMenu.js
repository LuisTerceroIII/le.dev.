import React, {useState} from 'react';
import MainMenuView from "./MainMenuView";

const MainMenu = ({isOpen}) => {

    const menu = ["Home", "About me", "Education", "Specialities", "Technologies", "Projects", "Contact"]

    return (
        <MainMenuView menu={menu} isOpen={isOpen}/>
    );
};

export default MainMenu;