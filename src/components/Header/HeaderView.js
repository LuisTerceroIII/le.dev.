import React, {useEffect, useState} from 'react';
import Logo from "./Logo";
import './Header.css';
import Hamburger from "hamburger-react";

const HeaderView = ({menu}) => {
    const [isOpen, setOpen] = useState(false)

    useEffect( () => {
        console.log(isOpen)
    }, [isOpen])

    return (
        <header className={isOpen ? "header header-open" : "header"}>
            <Logo containerClass={"container-logo-compo"} logoClass={"logo"} hamburgerClass={"hamburger-button"}/>
            <nav className={isOpen ? "menu-items-container menu-items-container-show" : "menu-items-container"}>
                {menu.map((item, key) => (
                    <li key={key+10}><a href={"#"} key={key}>{item}</a></li>
                ) )}
            </nav>
            <span className={"hamburger-button"}>
            <Hamburger
                size={60}
                toggled={isOpen}
                toggle={setOpen}
                direction={"right"}
                onToggle={toggled => {
                    if (toggled) {

                        console.log("is open")
                    } else {
                        console.log("isClose")
                    }
                }}/>
        </span>
        </header>
    );
};

export default HeaderView;