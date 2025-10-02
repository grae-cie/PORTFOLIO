import React from 'react'
import Project from '../Project/project'
import Skills from '../Skills/skills'
import About from '../about/About'
import Nav from '../Nav/nav'
import Contact from '../contact/contact'
import './home.css'
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';




function Home() {
  return (
    <div className='homepage-container'>
      <Nav/>
      <section  id='home' className='homepage-body'>
        <h1>Hello Mate, <br/> I'm Grace Ben a <span className='homepage-span'>Web Developer</span></h1>
        <p>Hi, I’m Grace! 👋 I’m a passionate web developer with almost full-stack experience and a growing interest in mobile app development. I love building clean, interactive web experiences. When I’m not coding, I enjoy watching series and listening to music. Explore my work and see what I’ve built! </p>
        <DotLottieReact src="https://lottie.host/cf39f3fb-53e5-47b1-b292-786f3ced329a/zVZ31c0I4a.json" loop autoplay/>
        <Link to="/cv" className="view-cv">
          View CV
        </Link>     
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='skill'>
        <Skills/>
      </section>
      <section id='project'>
        <Project/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
      <footer className="cv-footer">
        <p>© {new Date().getFullYear()} Ben Grace. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Home
