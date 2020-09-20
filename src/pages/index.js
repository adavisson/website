import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Projects />
  </Layout>
)

export default IndexPage
