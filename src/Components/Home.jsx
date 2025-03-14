import React from "react";
import Typewriter from "typewriter-effect";
import "../Styles/Home.css";
import { useRef } from "react";
import { animate, motion } from "framer-motion";
import Photo from "../Images/Profile_photo.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Home = () => {
  const problemCount = useRef(null);
  const updateCounter = () => {
    animate(0, 700, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => { problemCount.current.textContent = v.toFixed() }
    })
  };
  return (
    <div>
      <div id="main-div">
        <div id="left-div">
          <div>
            <h1 id="greet-head">Hello, I am Bhoomi Garg</h1>
          </div>
          <div id="typewriter-div">
            <h2 id="typewriter-letter">A</h2>
            <h2 id="typewriter-head">
              <Typewriter
                options={{
                  strings: [
                    "Computer Science & Design Student",
                    "Web Developer",
                    "DSA Enthusiast",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "typewriterpara",
                }}
              />
            </h2>
          </div>
          <div id="wrapper-div">
            <div id="problem-div">
              <p id="count-head"><motion.span whileInView={updateCounter} ref={problemCount} id="problem-span">0</motion.span>+<br /><span id="problem-text">DSA Problems Solved</span></p>
            </div>
            <div id="contact-div">
              <p id="contact-head"><span id="contact-span">Contact:</span><span id="contact-text"> gargbhoomi01@gmail.com</span></p>
            </div>
          </div>
        </div>
        <div id="right-div">
          <img src={Photo} alt="Profile_Photo" id="photo" />
        </div>
      </div>
      <div id="social-div">
        <a href="mailto:gargbhoomi01@gmail.com" target="_blank" rel="noopener noreferrer"  className="social-link">
          <FaEnvelope className="social-icon"/>
          <span className="social-label">Email</span>
        </a>
        <a href="https://github.com/Bhoomi3122" target="_blank" rel="noopener noreferrer"  className="social-link">
          <FaGithub className="social-icon"/>
          <span className="social-label">Github</span>
        </a>
        <a href="https://www.linkedin.com/in/bhoomi-garg-244b52219" target="_blank" rel="noopener noreferrer"  className="social-link">
          <FaLinkedin className="social-icon" />
          <span className="social-label">LinkedIn</span>
        </a>
        <a href="https://x.com/GargBhoomi51130" target="_blank" rel="noopener noreferrer"  className="social-link">
          <FaTwitter className="social-icon"/>
          <span className="social-label">Twitter</span>
        </a>

         
        </div>

    </div>
  );
};

export default Home;

