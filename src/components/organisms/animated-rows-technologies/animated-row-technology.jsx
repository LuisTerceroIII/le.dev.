import React, { useMemo } from 'react'
import "./animated-rows-technologies-styles.css"

export const AnimatedRowTechnology = ({techs, left}) => {

    const techsImages = useMemo(() => {
        return techs.map(techLocalUriImage => {
            const fileName = techLocalUriImage.split("/").at(-1)
            return <img src={techLocalUriImage} className='tech-image' alt={fileName} key={fileName}/>
        })
    })
    
    return (
        <section className={`technologies-animated-row ${left ? "start-left" : "start-right"}`}>
            {techsImages}
        </section>
    )
}
