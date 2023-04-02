import React from 'react';
import AboutMeView from "./AboutMeView";

const AboutMeSection = () => {
    const aboutMe = "Hi there, I'm Luis Espinoza, a Full Stack software developer specializing in Front-end Web and Mobile development. I am an optimistic, curious, problem solver, and creative person, and I love developing software because it feels amazing to create something new.\n" +
    "My expertise lies primarily in Typescript, React and React Native, which allows me to build efficient, scalable, and user-friendly web and mobile applications. I am always eager to collaborate with other professionals and work as part of a team to achieve the best possible results.\n" +
    "If you're looking for a reliable, efficient, and committed software developer, look no further! Check out my portfolio and see some of my recent projects, let's work together to bring your ideas to life."
    return <AboutMeView about={aboutMe}/>
};

export default AboutMeSection;


