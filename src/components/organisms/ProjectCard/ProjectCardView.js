import React from 'react'
import './ProjectCard.css'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/splide/dist/css/splide.min.css'
import Tag from "../../Atoms/Tag/Tag"

const ProjectCardView = ({images, projectName, description, tags, show, url=null}) => {
    
        return (
            <section className={`project-card ${show ? "show" : undefined}`} onClick={url != null ? () => window.open(url, '_blank') : null} style={{cursor: url != null ? "pointer": "default"}}>
                <p className={'project-name-project-card'}>{projectName}</p>
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
                    {images.map((slide,key) => (
                        <SplideSlide key={key}>
                            <img src={slide} alt={slide.slice(10)} className={'project-card-image'}/>
                        </SplideSlide>
                    ))}
                </Splide>
                <section className={'project-card-data'}>
                    <section className={'tags-container'}>
                        {tags.map((tag, key) => (
                            <Tag key={key} content={tag}/>
                        ))}
                    </section>
                    <p className={'project-card-description'}>{description}</p>
                </section>

            </section>
        )
}

export default ProjectCardView