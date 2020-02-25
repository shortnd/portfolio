import React from 'react';
import ExternalLinks from './ExternalLinks';

const SocialLinks = ({ socialLinks }) => (
  <ul className="h-full w-24 sm:w-auto flex flex-no-shrink flex-wrap sm:flex-no-wrap">
    {socialLinks &&
      socialLinks.map((link, index) => (
        <li className="flex-1 ml-2" key={index}>
          <ExternalLinks link={link} />
        </li>
      ))
    }
  </ul>
)

export default SocialLinks
