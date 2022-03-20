import React, {useEffect, useState} from 'react';
import "./MainMenu.css"

const MainMenuView = ({menu, isOpen}) => {

    useEffect(() => {
        if(isOpen) {
            setMoveClass(moveClasses[1])
        } else { setMoveClass(moveClasses[0])}
    }, [isOpen])

    const [xPosition, setXPosition] = useState('-150%')
    const moveClasses = ["mobile-menu-container-out", "mobile-menu-container-in"]
    const [moveClass, setMoveClass] = useState(moveClasses[0])
    return (
        <div className={moveClass} >
            <ul>
                {menu.map( (item,key) => (
                    <li key={key}>{item}</li>
                ))}
            </ul>

            <ul>
                <li><a href={"#"}>Link-1</a></li>
                <li><a href={"#"}>Link-2</a></li>
                <li><a href={"#"}>Link-3</a></li>
            </ul>
        </div>
    );
};

export default MainMenuView;