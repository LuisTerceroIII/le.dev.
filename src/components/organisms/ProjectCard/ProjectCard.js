import React from "react";
import ProjectCardView from "./ProjectCardView";

const ProjectCard = ({ dataCard, show }) => {
  const projectName = dataCard.name;
  const description = dataCard.description;
  const tags = dataCard.tags;
  const images = dataCard.images;

  return (
    <ProjectCardView
      images={images}
      projectName={projectName}
      description={description}
      tags={tags}
      show={show}
      url={dataCard?.url || null}
    />
  );
};

export default ProjectCard;
