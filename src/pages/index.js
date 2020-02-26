import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import WorkList from "../components/WorkList"
import SkillsList from '../components/SkillsList'
import AboutSection from '../components/AboutSection';
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container mx-auto mb-8 -mt-24 px-3 sm:px-6 md:px-12 xl:px-32">
      <div className="bg-white shadow-md text-xl p-6 sm:p-8 rounded">
        I'm a Junior Full-Stack Developer living in Detroit, MI who loves problem-solving, learning & sharing knowledge,
        and effective communication.
      </div>
    </section>
    <div className="container mx-auto px-3 sm:px-6 md:px-12 xl:px-32">
      <WorkList />
      <SkillsList />
      <AboutSection />
      <Contact />
    </div>
  </Layout>
)

export default IndexPage
