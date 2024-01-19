import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/Contact';

function PortfolioContainer () {
    const [currentPage, setCurrentPage] = useState ('Home');

    const handPageChange = (page) => {
        setCurrentPage(page);
    };



    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        } else if 
        (currentPage === 'About') {
            return <About/>;
        } 
        else if (currentPage === 'Projects') {
            return <Projects/>;
    } else {
        return <Contact />
    }
};

return (<div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
</div>
);

}

export default PortfolioContainer;