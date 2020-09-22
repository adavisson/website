import React from "react"
import { Link } from "gatsby"
import pic from "../images/profile_pic_crop.png"

const Hero = () => {
  return (
    <div className="about section" id="about">
      <h1>Welcome!</h1>
      <img
        alt="Andrew Davisson"
        className="profile-pic"
        src={pic}
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="500"
      />
      <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        I am a Full Stack Engineer with 5 years of experience as a Systems
        Administrator in various industries. I have a passion for learning new
        technologies and staying up to date with the latest trends in Software
        Development. I have experience working on highly collaborative teams,
        and I value effective communication. I welcome unique and challenging
        problems, and I enjoy finding ways to automate tasks and processes.
      </p>
      <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        I am currently working on projects that are built with a variety of
        technologies and frameworks, including: ReactJS, NodeJS, GraphQL,
        Apollo, Vue, and React-Native. Check out my{" "}
        <Link className="home-links" to="#resume">
          Resume
        </Link>{" "}
        and{" "}
        <Link className="home-links" to="#projects">
          Projects
        </Link>{" "}
        page to learn more about me and what I am working on.
      </p>
      <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
        A little more about me, I grew up in South Carolina and went to Clemson
        University (Go Tigers!). After graduating with a degree in Computer
        Information Systems, I landed a job in Charleston, SC and lived there
        for several years. While I really enjoyed living there, I decided that I
        would like to live somewhere with more than zero mountains. So, I made
        the move to Denver in the Summer of 2017 and I am thoroughly enjoying
        it. My hobbies include golf, snowboarding, hiking, weightlifting, and
        more recently I have been trying to get into photography.
      </p>
    </div>
  )
}

export default Hero
