import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ siteTitle }) => (
  <header className="bg-gray-900 text-white sticky z-50">
    <button id="skip" className="no-underline absolute shadow-lg rounded text-gold bg-rouge fixed px-2 py-4" tabIndex="0">SKIP TO CONTENT</button>
    <div className="bg-rouge h-1" />
    <section className="container h-full flex item-center justify-between leading-tight sm:leading-loose mx-auto px-3 sm:px-12">
      <h1 className="font-heading text-4xl text-gold tracking-wide font-marker">{siteTitle}</h1>
      <ul>
        <li>
          <a href="">
            <FontAwesomeIcon icon="coffee" />
          </a>
        </li>
      </ul>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
