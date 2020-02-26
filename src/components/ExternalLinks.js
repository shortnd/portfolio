import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExternalLinks = ({ link: { classes, target, icon, brand }}) => (
  <a className={classes} href={target} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={[`${brand ? 'fab' : 'fas'}`, icon]} />
  </a>
)

ExternalLinks.propTypes = {
  link: PropTypes.shape({
    classes: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    brand: PropTypes.bool
  }).isRequired
}

ExternalLinks.defaultProps = {
  link: {
    classes: ``,
    target: ``,
    icon: ``,
    brand: false
  }
}

export default ExternalLinks
