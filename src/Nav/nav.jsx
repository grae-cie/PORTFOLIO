import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import './nav.css'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("")

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
    const handleLinkClick = (section) => {
    setActive(section);
    setIsOpen(false); // ✅ close the menu when a link is clicked
  };

  return (
    <div className='nav-container'>
      
      {!isOpen && (
        <div className='hamburger' onClick={toggleMenu}>
          <GiHamburgerMenu size={24} color='#FF69B4' />
        </div>
      )}

      {isOpen && (
        <div className='close-menu' onClick={toggleMenu}>
          <IoMdClose size={34} color='#FF69B4' />
        </div>
      )}

      <h1 className='nav-span'>GRACE</h1>

      <div className={`nav-link-container ${isOpen ? "open" : ""}`}>
        <a href='#about' className={`nav-link ${active === "about" ? "active-link" : ""}`} onClick={() => handleLinkClick("about")}>
          About Me
        </a>
        <a href='#skill' className={`nav-link ${active === "skill" ? "active-link" : ""}`}  onClick={() => handleLinkClick("skills")}>
          Skills
        </a>
        <a href='#project'className={`nav-link ${active === "project" ? "active-link" : ""}`}  onClick={() => handleLinkClick("project")}>
          Projects
        </a>
      </div>
    </div>
  )
}

export default Nav
