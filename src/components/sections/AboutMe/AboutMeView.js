import React from 'react';
import Tilt from "react-tilt/dist/tilt";
import './AboutMe.css';


const AboutMeView = () => {
    const aboutMe = 'I am Luis Espinoza, an optimistic, curious, problem solver and creative person, and I develop software because it feels amazing to create something new and useful.\n' +
        'In the last few years I have learned about computer architecture. algorithm, data structure, paradigms, networks, building process, limits of software, operation systems, best practices and more.\n' +
        'In the time I\'ve been developing I\'ve created mini-games, institutional software and web sites, and I hope this doesn\'t stop.'
    return (
        <div className={'about-me-main-container'}>
            <section className={"about-me-section-container"}>
                <h2 className={'about-me-title'}>About me</h2>
                <div className={'about-me-content-container'}>
                    <Tilt options={{max: 35, perspective: 1000}} className={"avatar-image-tilt"}>
                        <img src={"./sun3.svg"} alt={"avatar-luis-espinoza"} className={'avatar-image-about-me'}/>
                    </Tilt>
                    <p className={'about-paragraph-right'}>{aboutMe}</p>
                </div>
            </section>
        </div>
    );
};

export default AboutMeView;