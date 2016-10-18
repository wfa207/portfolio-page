'use strict';

import React, { Component } from 'react';
import NavButton from './navButton';
import { navLinks } from '../../data';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav id='mainNav' className='navbar navbar-default navbar-fixed-top navbar-custom'>
        <div className='container'>
          { /* Brand and toggle get grouped for better mobile display */ }
          <div className='navbar-header page-scroll'>
            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
              <span className='sr-only'>Toggle navigation</span> Menu <i className='fa fa-bars'></i>
            </button>
            <a className='navbar-brand' href='#page-top'>Wes AuYeung</a>
          </div>
          { /* Collect the nav links, forms, and other content for toggling */ }
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              { navLinks.map(navLink => <NavButton
                key={navLink}
                navClass={navLink !== 'page-top' ? 'page-scroll' : 'hidden'}
                navLink={navLink}/>) }
            </ul>
          </div>
          { /* navbar-collapse */ }
        </div>
        { /* container-fluid */ }
      </nav>
    );
  }
}
