// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div class="header">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#story"
            onClick={() => handlePageChange('Story')}
            className={currentPage === 'Story' ? 'nav-link active' : 'nav-link'}
          >
            Story
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Art"
            onClick={() => handlePageChange('Art')}
            className={currentPage === 'Art' ? 'nav-link active' : 'nav-link'}
          >
            Art
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default NavTabs;
