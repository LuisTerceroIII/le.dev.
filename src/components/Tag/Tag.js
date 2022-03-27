import React from 'react';
import './Tag.css';

const Tag = ({content}) => {
    return (
        <div className={'tag-container'}>
            {content}
        </div>
    );
};

export default Tag;