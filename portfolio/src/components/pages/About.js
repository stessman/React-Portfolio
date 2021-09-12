import React from 'react';
import myImg from './assets/img/80078967.png';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img alt="Scott_Tessman_image" src={myImg}/>
      <p>
        Hello! My name is Scott Tessman and I have been passionate about programming for nearly the past 10 years of my life. After graduating high school I attended Minnesota
        State University Mankato(MNSU) as part of the Computer Information Technology program. While attending MNSU, I held a Software Engineer Intern position for a contracting
        company called Maverick Software Consulting. My main role as a contractor was manual and automated testing for Thomson Reuters.
      </p>
      <p>
        Shortly after graduating from MNSU, I held a position as a QA/Test Automation Consultant for another contracting company called tap|QA. While at tap|QA I had worked for a 
        couple different clients such as Dell Computers and Praeses, but a majority of my time working was with Praeses. My work with them consisted mostly of creating an automation
        framework and developing automated tests using C# and Selenium Webdriver.
      </p>
      <p>
        Currently, I am enrolled in a Web Development Bootcamp through the University of Minnesota. Through this program I have greatly expanded my knowledge and understanding 
        of the many tools and languages in the world of development. I thought I was interested in programming before, but this bootcamp has greatly peaked my interest and desire
        to learn more
      </p>
    </div>
  );
}
