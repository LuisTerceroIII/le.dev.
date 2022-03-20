import React from 'react';

const LandingButtonView = ({className, text}) => {
    return (
        <button className={className}>
            {text}
        </button>
    );
};

export default LandingButtonView;