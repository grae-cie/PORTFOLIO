import React from 'react'
import './project.css'

function Project() {
  return (
    <div className='project-container'>
      <div>
        <h1>My Projects</h1>
      </div>
      <div className='project-box-container'>
        <a href='https://bmi-calculator-pi-ten-53.vercel.app/' className="project-box">
          <h2>BMI calculator</h2>
          <p>Created a responsive Body Mass Index (BMI) Calculator using HTML, CSS, and JavaScript that determines whether a user is underweight, normal, overweight, or obese.</p>
        </a>
        <a className="project-box">
          <h2>Briefly PDF Summarizer</h2>
          <p>Built a sleek web app that compresses large PDF files into smaller sizes within seconds for faster sharing and storage.</p>
        </a>
        <a href='https://todo-app-iota-lovat-34.vercel.app/' className="project-box">
          <h2>Todo App</h2>
          <p>Engineered a classic Todo App using HTML, CSS, and JavaScript that allows users to view all pending tasks and delete them seamlessly. </p>
        </a>
        <a href='https://news-homepage-delta-seven.vercel.app/' className="project-box">
          <h2>News Landing Page</h2>
            <p>Designed a visually appealing landing page for a news outlet website using unique CSS styling to enhance layout and user experience.</p> 
        </a >
        <a href='https://weather-app-two-flame-73.vercel.app/' className="project-box">
          <h2>Weather App</h2>
          <p>Developed a mini weather app using HTML, CSS, and JavaScript that displays accurate real-time weather information for any searched location.</p>
        </a>
        <a className="project-box">
          <h2>EstateLink(Coming Soon)</h2>
          <p>Developing a dynamic real estate website that connects property buyers and sellers through an intuitive and user-friendly interface.</p>
        </a>
      </div>
    </div>
  )
}

export default Project
