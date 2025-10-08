import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import './contact.css'

function Contact() {
  return (
    <div className='contact-div'>
      <p>Contact Us: </p>
      <a href="https://github.com/grae-cie" target='_blank'>
  <FaGithub className="contact-icon" size={24}/>
</a>
<a href="https://x.com/chillwCeCe" target='_blank'>
  <BsTwitterX className="contact-icon" size={24}/>
</a>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=graceben542@gmail.com" target='_blank'>
  <IoMdMail className="contact-icon" size={24}/>
</a>

    </div>
  )
}

export default Contact
