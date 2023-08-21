import React, { memo } from 'react'
import "./about-me-styles.css"
import AnimatedText from 'react-animated-text-content'
import { AnimatedRowsTechnologies } from '../../index'
const AboutMe = () => {
  return (
    <section id={"about-me"} className={`about-me-main-container`}>
        <div>
            <AnimatedText
                animationType='light'
                duration={0.6}
                className='about-me-summary-message'
                tag={"p"}
                type="words"
            >
                Full Stack software developer specialized in Front-end Web and Mobile development
            </AnimatedText>
        </div>
        <AnimatedRowsTechnologies />
    </section>
  )
}

export const MemorizedAboutMe = AboutMe //memo(AboutMe)
