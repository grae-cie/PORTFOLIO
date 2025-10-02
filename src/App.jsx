import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import LandingPage from './LandingPage/landingPage'
import About from'./about/About'
import Home from './Home/home'
import Project from './Project/project'
import Skills from './Skills/skills'
import Cv from './Home/cv'


function App() {
  return (
   <Router>
    <Routes>
      <Route
        path="/"
        element = {
          <LandingPage/>
        }
      />

      <Route
        path="/home"
        element = {
          <Home/>
        }
      />

      <Route 
       path="/cv" 
       element = {
         <Cv />
        } 
      />

      <Route
        path="/about"
        element = {
         <About/>
        } 
      />
    
      <Route
        path="/project"
        element ={
          <Project/>
        }
      />
      
      <Route
        path="/skills"
        element = {
          <Skills/>
        }
      />
    </Routes>
   </Router>
  )
}

export default App
