import React from 'react';
import '../../styles/allPages.css';
import myResume from './assets/pdf/Scott_Tessman_Resume.pdf';

export default function Blog() {
  return (
    <div className="fillPage">
      <h1>Resume</h1>
      
      <h2>Download my resume <a src={myResume} download="Scott_Tessman_Resume.pdf">here</a></h2> {'change anchor to button'}
      <h4>Front-end Proficiency</h4>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>

      <h4>Back-end Proficiency</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

      <h4>Back-end Proficiency</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>

      <h4>Back-end Proficiency</h4>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
