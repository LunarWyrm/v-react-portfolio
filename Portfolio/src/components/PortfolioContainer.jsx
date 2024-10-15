import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Story from './pages/Story';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../App.scss';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Story':
        return <Story />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App is-flex is-flex-direction-column min-vh-100">
      <div className="rainbow-bg"></div>
      <div className="monstera-container">
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        
        <main className="main-container mt-4 is-flex-grow-1">
          <div className="center-column">
            
            {renderPage()}
          </div>
        </main>
        
        <div className="monstera-left"></div>
        <div className="monstera-right"></div>
      </div>
      <Footer />
    </div>
  );
}
