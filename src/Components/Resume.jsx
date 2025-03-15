import React from 'react'
import { FiExternalLink, FiDownload } from "react-icons/fi";
import '../Styles/Resume.css';
const Resume = () => {
  return (
    <div id="outer-div">
      <h1>Resume</h1>
      <div id="online-div">
      <a href="/Resume_Bhoomi.pdf" target='_blank' rel='noopener noreferrer' className='resume_link'><FiExternalLink className='icon'/>View Resume Online</a>
      </div>
      <div id="download-div">
      <a href='/Resume_Bhoomi.pdf' className='resume_link' download='Bhoomi_Garg_Resume'><FiDownload className='icon'/>Download Resume</a>
      </div>
    </div>
  )
}

export default Resume
