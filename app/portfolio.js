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
    <div class="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a class="btn btn-primary" href="#page-top">
            <i class="fa fa-chevron-up"></i>
        </a>
    </div>
  </div>
);

render(app, document.getElementById('root'));