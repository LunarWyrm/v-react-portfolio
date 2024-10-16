import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="https://github.com/LunarWyrm" className="text-light">GitHub</a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/vanessaengler/" className="text-light">LinkedIn</a>
          </li>
          <li className="list-inline-item">
            <a href="mailto:englerprogramming@gmail.com" className="text-light">Email</a>
          </li>
        </ul>
        <p class="copy-ve">&copy; 2024 Vanessa Engler | All Rights Reserved</p>
      </div>
    </footer>
  );
}
