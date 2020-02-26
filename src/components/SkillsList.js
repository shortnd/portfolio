import React from 'react';

import { MarkerHeading } from './MarkerHeading';

const skills = [
  'HTML & CSS',
  'Javascript',
  'Bootstrap',
  'TailwindCSS',
  'Vue',
  'React',
  'Redux',
  'React Native',
  'Express',
  'Node',
  'Laravel',
  'MongoDB',
  'MySQL & PostgresSQL',
  'Responsive Design',
  'Accessibility',
  'API Development',
  'Bash'
];

const smallScreenSkills = [...skills];
const smallScreenSkillsHalf = Math.ceil(skills.length / 2);
const otherSmallSkills = smallScreenSkills.splice(0, smallScreenSkillsHalf);

smallScreenSkills.sort((a, b) => {
  return b.length - a.length
});

otherSmallSkills.sort((a, b) => {
  return a.length - b.length
});

const SkillsList = () => (
  <div id="skills" className="border-t border-rouge py-10">
    <MarkerHeading
      text="Skills" />
    <section className="text-gray-800 mx-1 sm:mx-3">
      <ul className="hidden md:flex flex-wrap justify-between">
        {skills.map((skill, index) => <li key={index} className="px-2">{skill}</li>)}
      </ul>
      <div className="md:hidden clearfix" aria-hidden="false">
        <ul className="absolute">
          {smallScreenSkills.map((skill, index) => (<li key={index} className="px-2">{skill}</li>))}
        </ul>
        <ul className="float-right text-right">
          {otherSmallSkills.map((skill, index) => (<li key={index} className="px-2">{skill}</li>))}
        </ul>
      </div>
    </section>
  </div>
)

export default SkillsList;
