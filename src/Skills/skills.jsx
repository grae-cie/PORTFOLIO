import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div className='skills-container'>
      <h1>My Skills</h1>
      <h2>Technical Skills</h2>
      <ul>
        <li>Programing Languages: HTML, CSS, JavaScript</li>
        <li>Web Technologies: React, Node.js, React Native, Bootstrap, Express</li>
        <li>Databases: SQLite, MongoDB</li>
        <li>Tools & Technologies: Git, Visual Studio Code</li>
        <li>Operating Systems: windows</li>
        <li>Soft Skills: Problem Solving, Communication, Teamwork</li>   
        <li>Other skills: UI/UX, Cyber Security Analyst, Full Stack Developer</li>
      </ul>
      <h2>Professional Experience</h2>
      <ul>
        <li>Worked with senior developers to implement new features and fix bugs, improving overall application functionality.</li>
        <li>Participated in code reviews and contributed to enhancing code quality and maintainability.</li>
        <li>Collaborated with designers to build responsive, user-friendly UI/UX components.</li>
        <li>Utilized tools such as Git and Visual Studio Code in a Windows development environment.</li>
      </ul>
    </div>
  )
}

export default Skills