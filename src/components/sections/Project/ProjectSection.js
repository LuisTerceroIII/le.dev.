import React from 'react';
import ProjectView from "./ProjectView";
import projectData from './project-cards-data.json'

const ProjectSection = () => {

    const dataCard = projectData.projects;

    return (
        <ProjectView dataCard={dataCard} />
    );
};

export default ProjectSection;