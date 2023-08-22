import React, { useMemo } from 'react'
import "./projects-styles.css"
import { Animator, FadeIn, Move, ScrollPage, batch } from 'react-scroll-motion'
import projectData from './project-cards-data.json'
import ProjectCard from '../../organisms/ProjectCard/ProjectCard'
import AnimatedText from 'react-animated-text-content'

export const Projects = () => {

    const projects = useMemo(() => {
        return projectData.projects.map((cardInfo, key) => (
            <Animator animation={batch(FadeIn(), Move())}>
                <ProjectCard dataCard={cardInfo} key={key}/>
            </Animator>
        ))
    }, [])

    return (
        <section id={"projects"} className={`projects-main-container`}>
            <AnimatedText
                className="home-word projects-title-section"
                animationType={"float"}
                type={"words"}
                tag={"p"}
                duration={0.6}
            >
                Projects
            </AnimatedText>
            <section style={{overflow: 'visible', display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center"}}>
                {projects}
            </section>
        </section>
    )
}
