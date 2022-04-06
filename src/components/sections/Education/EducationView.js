import React from 'react';
import "./Education.css"
import Tilt from "react-tilt/dist/tilt";
const EducationView = ({education}) => {
    return (
        <section className={"education-main-container"}>
            <h2 className={'about-me-title'}>Education</h2>
            {education.map((study, key) => (
                <section key={key+100} className={"education-card-container"}>
                    <Tilt>
                        <img  src={study.imageURL} alt={study.school} className={"school-image"}/>
                    </Tilt>
                    <article  className={"education-item-description"}>
                        <p className={"school-name"}>{study.school}</p>
                        <p className={"years-duration"}>{study.years}</p>
                        <p className={"career-name"}>{study.title}</p>
                        <a href={study.link} className={"education-school-link"} target={"_blank"} rel="noopener noreferrer">Lear more</a>
                    </article>
                </section>
            ))}
        </section>
    );
};

export default EducationView;