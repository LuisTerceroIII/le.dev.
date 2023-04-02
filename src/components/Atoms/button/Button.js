import React from 'react';
import ButtonView from "./ButtonView";

const Button = ({className, text, route}) => {
    return (
        <ButtonView className={className} text={text} route={route}/>
    );
};

export default Button;