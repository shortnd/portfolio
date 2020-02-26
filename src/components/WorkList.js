import React from 'react';

import {WorkCard} from './WorkCard';
import {MarkerHeading} from './MarkerHeading';

const WorkList = () => {
  return (
    <div id="work" className="py-10">
      <MarkerHeading
        text="My Work" />
      <section className="sm:flex sm:flex-wrap mx-1 sm:mx-6">
        <WorkCard
          githubTarget="http://github.com/Chattaholigan"
          projectName="Hooligan Hymnal"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRaSX7jZkxLnxbe1i923fdE0i6zNvl_8EWlm9E2s4sUVx4mjbAE"
          imgAlt="Hooligan Hymnal Megaphone Logo">
            I help contribute to an open source project for <a href="http://dcfc.com" target="_blank" rel="noopener noreferrer">DCFC</a> supporter group and other independant soccer supporter groups. The project consists of a frontend mobile app written in React-Native and an API/Admin CRUD Express server.
        </WorkCard>
        <WorkCard
          githubTarget="https://github.com/shortnd/schoollatchkey"
          projectName="School Latchkey"
          imgSrc="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          imgAlt="Github logo for School Latchkey">
            School Latchkey is a <a href="https://laravel.com" target="_blank" rel="noopener noreferrer"
              title="Laravel">Laravel</a> app. It was created to help keep track of kids time in morning or after
            school latchkey. It was created to be multitenant so if other schools in the school district wanted to use
            it they could create there own school with there own users and children in seperate databases.
        </WorkCard>
        <WorkCard
          githubTarget="https://github.com/shortnd/laravel-mini-crm"
          projectName="Laravel Mini-CRM"
          imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/240px-Laravel.svg.png"
          imgAlt="Laravel Mini-CRM Logo">
            This project was based off of the article from <a
              href="https://laraveldaily.com/test-junior-laravel-developer-sample-project/" target="_blank"
              rel="noopener noreferrer" title="How to Test Junior Laravel Developer Skills: Sample Project">Laravel
              Daily</a>. It is to show a basic understanding of how to create a CRUD application in Laravel at what he
            fells is a Junior Level.
        </WorkCard>
      </section>
    </div>
  )
}

export default WorkList
