import React, { useMemo } from 'react'
import "./animated-rows-technologies-styles.css"

export const AnimatedRowTechnology = ({techs, left}) => {
    //eslint-disable-next-line
    const techsImages = useMemo(() => {
        return techs.map(techLocalUriImage => {
            const fileName = techLocalUriImage.split("/").at(-1)
            return <img src={techLocalUriImage} className='tech-image' alt={fileName} key={fileName}/>
        })
    //eslint-disable-next-line    
    }, [])
    
    return (
        <section className={`technologies-animated-row ${left ? "start-left" : "start-right"}`}>
            {techsImages}
        </section>
    )
}
