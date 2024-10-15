import React from 'react';
import Project from '../Project';

export default function Projects() {
  const projectData = [
    {
      title: 'Quiz Questers',
      description: 'QuizQuesters is for those who have a love for trivia and winning cool pixel art saved to your account to show all your friends!',
      link: 'https://crob127.github.io/QuizQuesters/',
      repo: 'https://github.com/crob127/QuizQuesters',
    },
    {
      title: 'Tendr',
      description: 'A platform for meeting other pet owners and setting up playdates!',
      link: 'https://tendr-va9s.onrender.com/',
      repo: 'https://github.com/sjean149/PetTinder-Group-Project2',
    },
    {
      title: 'InkSync',
      description: 'A simple text editor with PWA functionality.',
      link: 'https://inksync-xawq.onrender.com/',
      repo: 'https://github.com/LunarWyrm/inksync',
    },
    {
      title: 'Weather Dashboard',
      description: 'Read the weather forecast for your city in a sleek environment.',
      link: 'https://lunarwyrm.github.io/weatherdashboard/',
      repo: 'https://github.com/LunarWyrm/weatherdashboard',
    },
  ];

  return (
    <div className="container">
      <h2 className="name my-4">My Projects</h2>
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
