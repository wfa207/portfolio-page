'use strict';

import React from 'react';
import { render } from 'react-dom';

// import css
// import css from '../assets/less/portfolio.less';

// import components
import NavBar from './components/navbar';
import Overview from './components/overview';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';

const app = (
  <div>
    <NavBar/>
    <Overview/>
    <Projects/>
    <About/>
    <Contact/>
    <footer className='text-center'></footer>
  </div>
);

render(app, document.getElementById('root'));