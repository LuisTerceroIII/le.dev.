import React from 'react';
import AboutMeView from "./AboutMeView";

const AboutMeSection = () => {
    const aboutMe = 'I am Luis Espinoza, an optimistic, curious, problem solver and creative person, and I develop software because it feels amazing to create something new and useful.\n' +
        'In the last few years I have learned about computer architecture. algorithm, data structure, paradigms, networks, building process, limits of software, operation systems, best practices and more.\n' +
        'In the time I\'ve been developing I\'ve created mini-games, institutional software and web sites, and I hope this doesn\'t stop.'
    return <AboutMeView about={aboutMe}/>
};

export default AboutMeSection;