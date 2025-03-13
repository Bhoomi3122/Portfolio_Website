import React from 'react'
import Vector from '../Images/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_138676-9487-removebg-preview.png'
import '../Styles/About.css'
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaNetworkWired } from "react-icons/fa";
import { SiExpress, SiMongodb, SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiCplusplus, SiPython, SiJavascript } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div id="main-div">
        <div id="left-div">
          <h2>About Me</h2>
          <div><p>I am a Computer Science and Design student aspiring to become an SDE. Passionate about Web Development and Data Structures & Algorithms, I constantly refine my skills and explore new technologies to stay ahead in the ever-evolving tech world.</p></div>
          <div>
            <h3>Current Education</h3>
            <ul>
              <li>Currently pursuing a B.Tech in Computer Science and Design (2022-2026).</li>
              <li>Institute: Madhav Institute of Technology and Science (MITS-DU), Gwalior.
              </li>
              <li>CGPA: 8.95 (Highest in Branch)</li>
            </ul>
          </div>
          <div>
            <h3>Past Education</h3>
            <ul>
              <li>Completed Class 12th (CBSE Board) in 2021 with 93.6%.</li>
              <li>Completed Class 10th (CBSE Board) in 2019 with 94.8%.</li>
            </ul>
          </div>

        </div>
        <div id="right-div">
          <img src={Vector} alt="" id="vector-img" />
        </div>
      </div>
      <hr />
      <div id="skills-main-div">
        <h1 id="skills-head">Skills</h1>
        <div id="skills-div">
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaHtml5 className="skills-icon" />
              <span className="skills-label">HTML</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaCss3Alt className="skills-icon" />
              <span className="skills-label">CSS</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaJs className="skills-icon" />
              <span className="skills-label">JavaScript</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaBootstrap className="skills-icon" />
              <span className="skills-label">Bootstrap</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaReact className="skills-icon" />
              <span className="skills-label">React</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaNodeJs className="skills-icon" />
              <span className="skills-label">Node.js</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <SiExpress className="skills-icon" />
              <span className="skills-label">Express.js</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <SiMongodb className="skills-icon" />
              <span className="skills-label">MongoDB</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaCode className="skills-icon" />
              <span className="skills-label">DSA</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <MdComputer className="skills-icon" />
              <span className="skills-label">IoT</span>
            </a>
          </div>
          <div className="skill-card">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaNetworkWired className="skills-icon" />
              <span className="skills-label">Networking</span>
            </a>
          </div>
        </div>
      </div>
      <hr/>
      <div id="coding-div">
        <h1>Coding Platforms</h1>
        <div id="coding-icons-div">
          <a href="https://leetcode.com/u/Bhoomi_3122/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="coding-icon" style={{ cursor: "pointer" }} />
            <span className="coding-label">LeetCode</span>
          </a>
          <a href="https://www.geeksforgeeks.org/user/gargbhow8ef/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className="coding-icon" style={{ cursor: "pointer" }} />
            <span className="coding-label">GeeksforGeeks</span>
          </a>
          <a href="https://www.hackerrank.com/your-profile" target="_blank" rel="noopener noreferrer">
            <SiHackerrank className="coding-icon" style={{ cursor: "pointer" }} />
            <span className="coding-label">HackerRank</span>
          </a>
        </div>


      </div>

    </div>

  )
}

export default About
