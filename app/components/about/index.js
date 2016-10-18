'use strict';

import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='success' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>About</h2>
              <hr className='star-light'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-lg-offset-2'>
              <p>After graduating from Fullstack Academy's 13-week Immersive Web Development Program in July 2016, I was chosen for the school's selective fellowship program, further deepening my web development knowledge.</p>
            </div>
            <div className='col-lg-4'>
              <p>I am now seeking fulltime employment as a developer and am particularly interested in the fields of machine learning and algorithms. Please refer to my contact details below— I hope to become an integral part of your team!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}