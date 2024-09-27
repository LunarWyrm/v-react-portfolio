import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Story from './pages/Story';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './Footer'; // Import the Footer component

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
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="container mt-4 flex-grow-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
