import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          Hello, my name is Wakeel. I'm a front-end engineer with experience in
          Python, JavaScript, Node JS, MySQL, MongoDB, and React.
        </p>

        <p>
          My dream is to one day start my own business and become an
          entrepreneur (currently working on some ideas).
        </p>

        <p>
          I'm constantly learning new things. those things include
          gaining more experience with MongoDB, React and Node JS
        </p>

        <p>
          My latest project, Github Finder, is a search engine for Github. You
          can check it out{' '}
          <a
            href="https://github.com/WakeelJones/github-finder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          , or on the homepage. It is built with React, MongoDB and Node JS.
        </p>

        <p>
          More About me on{' '}
          <a
            href="http://www.facbook.com/profile.php?id=100008464240624&sk=about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook"></i>
          </a>
          .
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
