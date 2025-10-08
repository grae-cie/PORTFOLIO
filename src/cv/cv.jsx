import React from "react";
import "./cv.css"; // optional external styling

function Cv({darkMode, setDarkMode}) {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Ben Grace Asuquo</h1>
        <p>University of Nigeria, Nsukka</p>
        <p>
          📞 08165448482 | 📧 <a href="mailto:graceben542@gmail.com">graceben542@gmail.com</a>
        </p>
      </header>

      <section className="cv-section">
        <h2>Profile Summary</h2>
        <p>
          Highly motivated and detail-oriented web developer with 3+ years of experience in building
          responsive, user-friendly, and efficient web applications. A dynamic and enthusiastic
          Computer Science student with passion for software development and problem solving.
          Proficient in HTML, CSS, and JavaScript. A Cyber Security personnel, UI/UX designer, Web3
          enthusiast, and more. Eager to leverage technical skills and creativity to contribute to
          innovative projects.
        </p>
      </section>

      <section className="cv-section">
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming Languages:</strong> HTML, CSS, JavaScript</li>
          <li><strong>Web Technologies:</strong> React, Node.js, React Native, SQLite, Bootstrap</li>
          <li><strong>Soft Skills:</strong> Problem Solving, Communication, Teamwork</li>
          <li><strong>Tools & Technologies:</strong> Git, Visual Studio Code</li>
          <li><strong>Operating Systems:</strong> Windows</li>
          <li><strong>Other Skills:</strong> UI/UX, Cyber Security Analysis, Full Stack Development</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Professional Experience</h2>
        <ul>
          <li>Worked with senior developers to implement new features and bug fixes.</li>
          <li>Participated in code reviews and contributed to the improvement of codebase.</li>
          <li>Collaborated with designers to implement responsive and user-friendly UI/UX.</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>Education</h2>
        <p><strong>Bachelor of Science in Computer Science</strong></p>
        <p>University of Nigeria, Nsukka – Enugu State</p>
      </section>

      <section className="cv-section">
        <h2>Certifications & Training</h2>
        <ul>
          <li>Introduction to Cyber Security – Cisco, 2024</li>
          <li>HTML, CSS, JavaScript Training – Coursera, 2022</li>
          <li>Node & React – Coursera, 2025 | YouTube, 2025</li>
          <li>React Native – YouTube, 2025</li>
          <li>Introduction to Figma – YouTube, 2025</li>
        </ul>
      </section>
    </div>
  );
}

export default Cv;
