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

const app = (
  <div>
    <NavBar/>
    <Overview/>
    <Projects/>
    <About/>
    <footer className='text-center'></footer>
    <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a className="btn btn-primary" href="#page-top">
            <i className="fa fa-chevron-up"></i>
        </a>
    </div>
  </div>
);

render(app, document.getElementById('root'));