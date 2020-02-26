import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const WorkCard = ({ githubTarget, projectName, imgSrc, imgAlt, children }) => {
  return (
    <article className="w-full sm:flex bg-white shadow mb-6 p-3 sm:p-6 border-b border-rouge">
      <a href={githubTarget} target="_blank" rel="noopener noreferrer" title="Hooligan Hymnal" className="border w-1/3">
        <img src={imgSrc} alt={imgAlt} />
      </a>
      <div className="sm:w-3/4 sm:ml-6 mt-6 sm:mt-0">
        <h3 className="flex mb-3">
          <a href={githubTarget} target="_blank" rel="noopener noreferrer" title={`View ${projectName} on Github`} className="mr-4">
            <FontAwesomeIcon icon={["fab", "github"]} />
            {projectName}
          </a>
        </h3>
        <p>
          {children}
        </p>
      </div>
    </article>
  )
}

WorkCard.propTypes = {
  githubTarget: PropTypes.string,
  project: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  children: PropTypes.any
}
