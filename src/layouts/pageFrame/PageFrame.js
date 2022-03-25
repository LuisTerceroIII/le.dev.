import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const PageFrame = ({children}) => {
    return (
        <main>
            <Header />
            {children}
            <Footer/>
        </main>
    );
};

export default PageFrame;