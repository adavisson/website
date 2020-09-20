//import React from 'react';
import React, { Component } from "react"
import resume from "../images/andrew-resume.pdf"
import resumePng from "../images/andrew-resume.png"
import { Button } from "@material-ui/core"

const openResume = () => {
  window.open(resume, "_blank")
  return false
}

class Resume extends Component {
  render() {
    return (
      <div id="resume" className="resume">
        <h1>Resume</h1>
        <div className="document">
          <img src={resumePng} alt='' className='resume-image' />
        </div>
        <div className="download-button">
          <Button variant="contained" color="primary" onClick={openResume}>
            Download a Copy
          </Button>
        </div>
      </div>
    )
  }
}

export default Resume
