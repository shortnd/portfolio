import React from 'react';
import PropTypes from 'prop-types';

export const MarkerHeading = ({ text }) => <h2 className="text-4xl tracking-wide mb-6 text-rouge font-marker">{text}</h2>

MarkerHeading.propTypes = {
  text: PropTypes.string.isRequired
}

MarkerHeading.defaultProps = {
  text: ``
}
