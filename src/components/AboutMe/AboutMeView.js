import React from 'react';
import Header from "../Header/Header";
import Tilt from "react-tilt/dist/tilt";
import './AboutMe.css';
import Footer from "../Footer/Footer";


const AboutMeView = () => {
    const lorem = 'Lorem ipsum dolor sit amet. In magni nulla qui nihil minus aut molestias voluptatem. Qui consequatur fuga et sint voluptate in consectetur autem et fugiat amet et unde fugiat qui asperiores maiores. Qui necessitatibus temporibus sed explicabo provident non asperiores nihil sed internos illum ea amet voluptatem? Eum blanditiis dolor aut amet obcaecati ut galisum cupiditate est quibusdam eaque ea eligendi voluptatem ut aliquid exercitationem ultima. '
    return (
        <div className={'about-me-main-container'}>
            <section className={"about-me-section-container"}>
                <h2 className={'about-me-title'}>About me</h2>
                <Tilt options={{max: 35, perspective: 1000}} className={"avatar-image-tilt"}>
                    <img src={"./sun2.svg"} alt={"avatar-luis-espinoza"} className={'avatar-image-about-me'}/>
                </Tilt>
                <p className={'about-paragraph-right'}>{lorem}</p>
            </section>
        </div>
    );
};

export default AboutMeView;