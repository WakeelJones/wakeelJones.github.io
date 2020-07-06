import React from 'react';
import Hero from '../components/Hero';

import Content from '../components/Content';


function Testimonials(props) {
  return (
    <div>
      <Hero title={props.title} />

          <Content>
              <strong>Jason Wandrag (Group Lecturer):</strong> <p>Wakeel has shown strong skills in development, and a keen interest in programming. He dives headfirst into projects, which he has shown a passion for.</p>

              <strong>Joshua (Peer):</strong> <p>Well done. You did very well for this project.
Well done on making use of python coding convention.</p>
              
              <strong>Ganief (Peer):</strong> <p>His websites are as professional as I've seen yet</p>

              <strong>Sergio (Peer):</strong> <p>Wakeel is a hard working, dedicated and committed developer. He add's a very unique creative aspect to all his Projects and strives for it to be the best. this makes him an asset to a company.  </p>

              <strong>Brittney (Peer):</strong> <p>Wakeel is a great Developer with his own unique touch and would be an asset to any company looking for one heck of a developer.</p>
          </Content>
    </div>
  );
}

export default Testimonials;
