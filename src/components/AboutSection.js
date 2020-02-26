import React from 'react'

import { MarkerHeading } from './MarkerHeading'

const AboutSection = () => (
  <div id="about" className="border-t border-rouge py-10">
    <MarkerHeading
      text="About Me" />
    <section className="sm:flex sm:ml-6">
      <div className="mt-6 sm:mt-0">
        <p>
          I grew up at the time computers were really starting to hit main stream, but didn't fall in love with them until late in high school. My best friend in high school gave me his gaming desktop for a few weeks while he was on vacation. While he was away it broke and I learned how to fix it. He then let me keep the computer and I started rebuilding it on my own. I then slowly learned about HTML/CSS to make some simple websites.
        </p>
        <p className="pt-3">
        I started going to my local community college for web design, but found out that it would take at least three+ years to complete the course how the school had it setup. I heard through some people of coding boot camps and decided to go to General Assembly, in Washington, DC. After that I have been working on side projects until I got my current job.
        </p>
      </div>
    </section>
    <section className="sm:flex sm:ml-6 mt-12">
      <div className="mb-8 sm:mb-0">
        <p>
        Currently I'm a Web Developer at <a href="https://revize.com" className="text-rouge" target="_blank"
              rel="noopener noreferrer" title="Revize Goverment Websites">revize</a>. I spend most of my days making
            websites for different
            Government Municipalities and other businesses. Most of my most recent experience comes from <a
              className="text-rouge" href="https://github.com/Chattahooligans" target="_blank" rel="noopener noreferrer"
              title="View Hooligan Hymnal on Github">Hooligan Hymnal</a> an
            open source solution for independent
            supporter groups. I got into this project because of my love for <a href="https://www.detcityfc.com/"
              target="_blank" rel="noopener noreferrer" title="Detroit City Football Club" className="text-rouge">DCFC</a>
            and being part of
            the <a href="https://noonelikes.us" target="_blank" rel="noopener noreferrer" className="text-rouge">Norther
              Guard</a>. This projects uses Express for the Admin
            Server, and a React Native Application for users to see different songs, players and announcements.
        </p>
        <p className="mt-3">
        When not programming I enjoy relaxing with my family, reading, watching talks, watching soccer, and going to
            watch <a href="https://www.detcityfc.com/" target="_blank" rel="noopener noreferrer"
              title="Detroit City Football Club" className="text-rouge">DCFC</a> in
            Hamtramck or at the Clubhouse.
        </p>
      </div>
    </section>
  </div>
)


export default AboutSection
