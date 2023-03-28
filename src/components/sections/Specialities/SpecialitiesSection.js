import React from 'react';
import SpecialitiesView from "./SpecialitiesView";

const SpecialitiesSection = () => {
    const specialities = ['front end', 'back end', 'full stack','Java Dev', 'Mobile App'];
    return (
       <SpecialitiesView specialities={specialities}/>
    );
};

export default SpecialitiesSection;