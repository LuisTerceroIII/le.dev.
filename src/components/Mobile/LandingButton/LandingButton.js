import React from 'react';
import LandingButtonView from "./LandingButtonView";

const LandingButton = ({className, text}) => {
    return (
        <LandingButtonView className={className} text={text}/>
    );
};

export default LandingButton;