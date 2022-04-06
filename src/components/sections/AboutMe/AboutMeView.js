import React from 'react';
import Tilt from "react-tilt/dist/tilt";
import './AboutMe.css';


const AboutMeView = ({about}) => {

    return (

            <section className={"about-me-section-container"}>
                <h2 className={'about-me-title'}>About me</h2>
                <article className={'about-me-content-container'}>
                    <Tilt options={{max: 35, perspective: 1000}} className={"avatar-image-tilt"}>
                        <img src={"./sun3.svg"} alt={"avatar-luis-espinoza"} className={'avatar-image-about-me'}/>
                    </Tilt>
                    <p className={'about-paragraph-right'}>{about}</p>
                </article>
            </section>
    );
};

export default AboutMeView;