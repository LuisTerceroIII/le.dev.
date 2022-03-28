import React from 'react';
import './Project.css';
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectView = ({dataCard}) => {
    return (
        <section className={'project-container'}>
            <h2 className={'about-me-title'}>Projects</h2>
            <section className={'project-cards-container'}>
                {dataCard.map((cardInfo, key) => (
                    <ProjectCard dataCard={cardInfo} key={key}/>
                ))}
            </section>

        </section>
    );
};

export default ProjectView;