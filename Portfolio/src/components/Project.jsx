import React from 'react';

export default function Project({ title, description, link, repo }) {
  return (
    <div className="card bg-dark text-light mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            View Project
          </a>
          <a href={repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
