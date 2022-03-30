import React from 'react';
import SpecialitiesView from "./SpecialitiesView";

const SpecialitiesSection = () => {
    const specialities = ['front end', 'back end', 'full stack','Java Dev'];
    return (
       <SpecialitiesView specialities={specialities}/>
    );
};

export default SpecialitiesSection;