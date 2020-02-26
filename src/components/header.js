import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SocialLinks from "./SocialLinks";

const socialLinks = [
  {
    target: 'https://www.linkedin.com/in/collin-o-connell-40a230132/',
    classes: 'text-white text-2xl no-underline p-1 rounded bg-icon-linkedin mb-2',
    icon: 'linkedin-in',
    brand: true
  },
  {
    target: 'https://twitter.com/shortnd667',
    classes: 'text-white fab fa-twitter text-2xl no-underline p-1 rounded bg-green bg-icon-twitter mb-2',
    icon: 'twitter',
    brand: true
  },
  {
    target: 'https://github.com/shortnd',
    classes: 'text-white fab fa-github text-2xl no-underline p-1 rounded bg-green bg-gray-800 mb-2',
    icon: 'github',
    brand: true
  },
  {
    target: 'mailto:ococncol@gmail.com',
    classes: 'text-white fa fa-envelope text-2xl no-underline p-1 rounded bg-green bg-gold mb-2',
    icon: 'envelope',
    brand: false
  }
]

const Header = ({ siteTitle }) => (
  <header className="bg-gray-900 text-white sticky z-50">
    <button id="skip" className="no-underline absolute shadow-lg rounded text-gold bg-rouge fixed px-2 py-4" tabIndex="0">SKIP TO CONTENT</button>
    <div className="bg-rouge h-1" />
    <nav className="container h-full flex items-center justify-between leading-tight sm:leading-loose mx-auto p-3 sm:px-12">
      <h1 className="font-heading text-4xl text-gold tracking-wide font-marker">{siteTitle}</h1>
      <SocialLinks socialLinks={socialLinks} />
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
