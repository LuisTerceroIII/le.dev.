import React from 'react'
import { AnimatedRowTechnology } from './animated-row-technology'

export const AnimatedRowsTechnologies = () => {

    const techsPartOne = [
      "./icons/java.png",
      "./icons/javascript.png",
      "./icons/typescript.png",
      "./icons/firebase-logo.png",
      "./icons/node-js(1).png",
      "./icons/2.png",
      "./icons/5.png",
      "./icons/reactg(1).png"
    ];
    const techsPartTwo = [
      "./icons/13.png",
      "./icons/mongodb(1).png",
      "./icons/css3.png",
      "./icons/html5.png",
      "./icons/gatsby.png",
      "./icons/heroku.png",
      "./icons/amazonwebservices.png",
      "./icons/Netlify.png",
    ];


    return (
        <section className='animated-rows-main-container'>
            <AnimatedRowTechnology techs={techsPartOne} left/>
            <AnimatedRowTechnology techs={techsPartTwo} />
        </section>
    )
}
