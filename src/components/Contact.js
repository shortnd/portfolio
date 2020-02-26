import React from 'react'
import { MarkerHeading } from './MarkerHeading'

import ContactCard from './ContactCard';

const Contact = () => (
  <div id="contact" className="border-t border-rouge py-10">
    <MarkerHeading
      text="Contact" />
    <section className="sm:flex sm:flex-wrap mx-1 sm:mx-6">
      <ContactCard
        target="https://www.linkedin.com/in/collin-o-connell-40a230132/"
        icon="linkedin-in"
        classes="text-2xl text-icon-linkedin rounded border-gray-300 mr-2 p-1"
        brand={true}
        text="LinkedIn"
         />
      <ContactCard
        target="https://twitter.com/shortnd667"
        icon="twitter"
        classes="text-2xl rounded border-gray-300 mr-2 bg-icon-twitter text-white p-1"
        brand={true}
        text="Twitter" />
      <ContactCard
        target="https://github.com/shortnd"
        icon="github"
        classes="text-2xl rounded bg-gray-900 mr-2 text-white p-1"
        brand={true}
        text="Github" />
      <ContactCard
        target="mailto:ococncol@gmail.com"
        icon="envelope"
        classes="text-2xl rounded bg-rouge mr-2 text-white p-1"
        text="Email" />
    </section>
  </div>
)


export default Contact;
