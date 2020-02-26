import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import '../utils/fontawesome';

import Header from "./header"
import '../css/global.css';
import "./layout.css"
import { Hero } from "./Hero";
import { Footer } from './Footer';

const Layout = ({ children }) => {

  useEffect(() => {
    const wrapper = document.getElementById('gatsby-focus-wrapper')
    wrapper.style.minHeight = '100vh'
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    return () => {
    };
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Hero />
      <main id="main" className="mt-16 md:w-4/5 container mx-auto text-gray-900 sm:w-full px-2 flex-1">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
