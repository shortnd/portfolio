import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <section className="container mx-auto mb-8 -mt-24 px-3 sm:px-6 md:px-12 xl:px-32">
      <div className="bg-white shadow-md text-xl p-6 sm:p-8 rounded">
        I'm a Junior Full-Stack Developer living in Detroit, MI who loves problem-solving, learning & sharing knowledge,
        and effective communication.
      </div>
    </section>
    <div className="container mx-auto px-3 sm:px-6 md:px-12 xl:px-32">
      <div id="work" className="py-10">
        <h2 className="text-4xl tracking-wide mb-6 text-rouge font-marker">My Work</h2>
      </div>
    </div>
  </Layout>
)

export default IndexPage
