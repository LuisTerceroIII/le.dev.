import React from 'react';
import './Project.css';
import ProjectCard from "../../organisms/ProjectCard/ProjectCard";

const ProjectView = ({dataCard, show}) => {
    return (
        <section className={'project-container'}>
            <h2 className={'about-me-title'}>Projects</h2>
            <section className={'project-cards-container'}>
                {dataCard.map((cardInfo, key) => (
                    <ProjectCard dataCard={cardInfo} key={key} show={show}/>
                ))}
            </section>

        </section>
    );
};

export default ProjectView;