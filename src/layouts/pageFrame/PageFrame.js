import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const styles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
}

const PageFrame = ({children}) => {
    return (
        <main style={styles}>
            <Header />
            {children}
            <Footer/>
        </main>
    );
};

export default PageFrame;