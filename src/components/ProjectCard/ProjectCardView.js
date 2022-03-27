import React from 'react';
import './ProjectCard.css';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import Tag from "../Tag/Tag";

const ProjectCardView = ({images, projectName, description, tags}) => {
    return (
        <div className="project-card">
            <h2 className={'project-name-project-card'}>{projectName}</h2>
            <Splide
                className={'slide-project-card'}
                options={{
                    type: "loop",
                    rewind: true,
                    autoplay: true,
                    pauseOnHover: false,
                    resetProgress: true,
                    arrows: false,
                    pagination: false
                }}
                hasAutoplayProgress
            >
                {images.map((slide) => (
                    <SplideSlide key={slide.src}>
                        <img src={slide} alt={slide.slice(10)} className={'project-card-image'}/>
                    </SplideSlide>
                ))}
            </Splide>
            <div className={'project-card-data'}>

                <section className={'tags-container'}>
                    {tags.map((tag, key) => (
                        <Tag content={tag}/>
                    ))}
                </section>
                <p className={'project-card-description'}>{description}</p>
            </div>

        </div>
    );
};

export default ProjectCardView;