import React from "react"
import ProjectCard from "../components/projectCard"

const Projects = () => {
  const projects = [
    {
      title: "Job Board",
      description:
        "This application allows a user to view companies and job postings, and save contact information and notes. This project also implements GraphQL.",
      repository: "https://github.com/adavisson/job-board-client",
      blog: "https://adavisson.github.io/graphql_a_better_api",
    },
    {
      title: "Gmail Electron",
      description:
        "An electron application that runs the gmail web interface as a desktop application and loads chrome extension that gives the page a more minimal appearance",
      repository: "https://github.com/adavisson/gmail-electron",
      blog: "https://adavisson.github.io/getting_started_with_electron",
    },
    {
      title: "CFB Machine",
      description:
        "This application is built with Vue and Vuetify. It allows you to look up historical College Football matches and stats.",
      repository: "https://github.com/adavisson/cfb-machine-vuetify",
      blog: "https://adavisson.github.io/making_a_vuetiful_app",
      link: "https://cfb-machine.andydavisson.com/",
    },
    {
      title: "Ansible Home",
      description:
        "A small Ansible project for managing my home media server and my AWS hosted webserver.",
      repository: "https://github.com/adavisson/ansible-home",
      blog: "https://adavisson.github.io/automating_with_ansible",
    },
    {
      title: "Crazy Tales",
      description:
        "This application mimics Mad Libs. A user is presented with types of words to come up with and is then presented with a story where those words are used.",
      repository: "https://github.com/adavisson/crazy-tales",
      link: "https://crazy-tales.andydavisson.com/",
    },
    {
      title: "MadLibz RN",
      description:
        "This is a native mobile application developed with React Native. It is essentially my Crazy Tales application, but developed to be a native mobile app.",
      repository: "https://github.com/adavisson/madlibz-rn",
    },
    {
      title: "Meme Generator",
      description:
        "This application has several popular images used in memes and allows you to add a phrase. It also allows you to choose the placement and color of the phrase.",
      repository: "https://github.com/adavisson/meme-generator",
    },
    {
      title: "Rails Library",
      description:
        "This is a full Ruby on Rails application that mimics a library. It allows Librarians to add books, authors, and genres, and it allows standard users to check in/out books.",
      repository: "https://github.com/adavisson/rails-project-library",
    },
    {
      title: "Study Buddy",
      description:
        "This application provides study questions for various topics that one might see in a developer interview.",
      repository: "https://github.com/adavisson/study-buddy",
      link: "https://study-buddy.andydavisson.com/",
    },
    {
      title: "Beer Presenter",
      description:
        "This is a command line Ruby application that scrapes the site Untappd for the top 50 beers, and allows you to view them by genre and brewery.",
      repository: "https://github.com/adavisson/beer_presenter",
    },
  ]

  return (
    <div className="projects section" id="projects">
      <h1>Projects</h1>
      <div className="card-container">
        {projects.map(proj => {
          return (
            <ProjectCard
              title={proj.title}
              description={proj.description}
              repository={proj.repository}
              link={proj.link}
              blog={proj.blog}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
