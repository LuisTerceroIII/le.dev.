import React from 'react';
import './Technologies.css'
import Tilt from "react-tilt/dist/tilt";

const TechnologiesView = ({logos}) => {
    return (
        <section className={'technologies-container'}>
            <h2 className={'about-me-title tech-title'}>Technologies</h2>
            <section className={'technologies-logos'}>
                { logos.map((logo, i) => (
                    <Tilt key={i}>
                        <img key={i+1000} className={'tech-logo'} src={logo} alt={logo.slice(8)}/>
                    </Tilt>
                ))}
            </section>
        </section>
    );
};

export default TechnologiesView;