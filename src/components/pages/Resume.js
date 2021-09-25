import React from 'react';
import '../../styles/allPages.css';
import myResume from './assets/pdf/Scott_Tessman_Resume.pdf';
import '../../styles/resumePage.css';

export default function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
      <h4 className="resumeHeader">Front-end Proficiency</h4>
      <ul className="resumeList">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      </div>
      <div className="col">
      <h4 className="resumeHeader">Back-end Proficiency</h4>
      <ul className="resumeList">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL/Sequelize</li>
        <li>MongoDB/Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      </div>
      </div>
      <a className="pdfLink" href={myResume} download="Scott_Tessman_Resume.pdf">Download Resume</a>
    </div>
  );
}
