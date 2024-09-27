import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <p>&copy; 2024 Vanessa Engler | All Rights Reserved</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://github.com/your-github" className="text-light">GitHub</a>
          </li>
          <li className="list-inline-item">
            <a href="https://linkedin.com/in/your-linkedin" className="text-light">LinkedIn</a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:englerprogramming@gmail.com" className="text-light">Email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
