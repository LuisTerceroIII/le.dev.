import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import "./projects-styles.css"
import projectData from './project-cards-data.json'
import ProjectCard from '../../organisms/ProjectCard/ProjectCard'

export const Projects = () => {


    const [isIntersecting, setIsIntersecting] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          setIsIntersecting(entry.isIntersecting)
        }, {
            root: null,
            rootMargin: "-150px"
        })
        observer.observe(ref.current)
        return () => observer.disconnect()
      }, [])

    useEffect(() => {
        if (isIntersecting) {
            const cards = ref.current?.getElementsByClassName("project-card")
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.add("show")
            }
        } else {
            const cards = ref.current?.getElementsByClassName("project-card")
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove("show")
            }
        }
    }, [isIntersecting])

    const projects = useMemo(() => {
        return projectData.projects.map((cardInfo, key) => (
            <ProjectCard dataCard={cardInfo} key={key}/>
        ))
    }, [])

    return (
        <section id={"projects"} className={`projects-main-container`}>
            <p className="home-word projects-title-section">
                Projects
            </p>
            <section ref={ref} className='projects-cards-container'>
                {projects}
            </section>
        </section>
    )
}
export const ProjectsMemo = memo(Projects)