import React from 'react';
import './NotFound.css';

const NotFoundView = () => {
    return (
        <section className={'not-found-main-container'}>
            <img className={'not-found-sun'} src={"./sun3.svg"} alt={"sun"} />
            <p className={'not-found-number'}>404</p>
            <p className={'not-found-message'}>nothing here</p>
            <img  className={'not-found-moon'} src={"./moon.svg"} alt={"sun"} />
        </section>
    );
};

export default NotFoundView;