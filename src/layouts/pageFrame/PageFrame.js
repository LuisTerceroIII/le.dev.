import React from 'react';
import Header from "../../components/Header/Header";

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
        </main>
    );
};

export default PageFrame;