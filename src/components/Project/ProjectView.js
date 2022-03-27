import React from 'react';
import './Project.css';
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectView = ({dataCard}) => {
    return (
        <section className={'project-container'}>
            <h2 className={'about-me-title'}>Projects</h2>
            {dataCard.map((cardInfo, key) => (
                <ProjectCard dataCard={cardInfo} key={key}/>
            ))}
        </section>
    );
};

export default ProjectView;