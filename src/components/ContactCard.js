import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCard = ({ target, icon, classes, brand, text }) => (
  <div className="sm:w-1/2 sm:pr-3 pb-3">
    <a href={target} target="_blank" rel="noopener noreferrer" className="block flex items-center bg-white hover:bg-gray-100 shadow p-3">
      <FontAwesomeIcon className={classes} icon={[`${brand ? 'fab' : 'fas'}`, icon]} />
      {text}
    </a>
  </div>
)

ContactCard.propTypes = {
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  brand: PropTypes.bool,
  text: PropTypes.string
}

export default ContactCard
