import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import React, { useState, useEffect } from "react";
import LandingPage from './LandingPage/landingPage'
import Home from './Home/home'

import Cv from './cv/cv'


function App() {

    const [darkMode, setDarkMode] = useState(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("darkMode")
    return savedTheme ? savedTheme === "true" : prefersDark
  } )

  useEffect(() => {
    if(darkMode){
      document.body.classList.add("dark-mode")
    } else{
      document.body.classList.remove("dark-mode")
    }

    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  return (
   <Router>
    <Routes>
      <Route path="/" element = {<LandingPage darkMode = {darkMode} setDarkMode = {setDarkMode} />}
      />

      <Route
        path="/home"
        element = {
          <Home darkMode = {darkMode} setDarkMode = {setDarkMode}/>
        }
      />

      <Route 
       path="/cv" 
       element = {
         <Cv darkMode = {darkMode} setDarkMode = {setDarkMode} />
        } 
      />
        
    </Routes>
   </Router>
  )
}

export default App
