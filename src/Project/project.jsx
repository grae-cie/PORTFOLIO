import React from 'react'
import './project.css'

function Project() {
  return (
    <div className='project-container'>
      <div>
        <h1>My Projects</h1>
      </div>
      <div className='project-box-container'>
        <div className="project-box">
          <h2>BMI calculator</h2>
          <p>Created a Body Mass Calculator that checks if the User is obese, Underweight, Overweight and Normal</p>
        </div>
        <div className="project-box">
          <h2>Briefly PDF Summarizer</h2>
          <p>Built a sleek app that takes a bulky pdf and turns it into something less bulky in seconds </p>
        </div>
        <div className="project-box">
          <h2>Todo App</h2>
          <p>Engineered the classic Todo App that helps a user to show all their pending tasks and also allows them to delete them </p>
        </div>
        <div className="project-box">
          <h2>News Landing Page</h2>
            <p>Designed the landing page of a news outlet website with unique CSS styling</p> 
        </div>
        <div className="project-box">
          <h2>UI Dashboard Landing Page</h2>
          <p> Designed the Landing Page of a UI Dashboard that showed my unique Css skills</p>
        </div>
        <div className="project-box">
          <h2>Panda Collection</h2>
          <p>Built a cute page that showed my beautiful panda collections using different css styles</p>
        </div>
      </div>
    </div>
  )
}

export default Project
