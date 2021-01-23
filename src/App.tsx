import React, { useState } from 'react';
import SessionContext from './contexts/SessionContext';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


function App() {

    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        
        <SessionContext.Provider
        value={{
            isAuthenticated,
            setAuthenticated,
        }} >

        <Container>
            {isAuthenticated && <Header />}
            <Content />
            <Footer />
        </Container>

        </SessionContext.Provider>
    );
}

export default App
