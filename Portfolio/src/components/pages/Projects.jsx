import React from 'react';
import Project from '../Project';

export default function Projects() {
  const projectData = [
    {
      title: 'Project One',
      description: 'A description of Project One, which is an amazing project that solves X problem.',
      link: 'https://project-one-link.com',
      repo: 'https://github.com/your-github/project-one',
    },
    {
      title: 'Project Two',
      description: 'This is Project Two, a fantastic app that helps you do Y.',
      link: 'https://project-two-link.com',
      repo: 'https://github.com/your-github/project-two',
    },
    {
      title: 'Project Three',
      description: 'An innovative solution for Z, Project Three has these features...',
      link: 'https://project-three-link.com',
      repo: 'https://github.com/your-github/project-three',
    },
  ];

  return (
    <div className="container">
      <h2 className="my-4">My Projects</h2>
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-md-4" key={index}>
            <Project 
              title={project.title} 
              description={project.description} 
              link={project.link} 
              repo={project.repo} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
