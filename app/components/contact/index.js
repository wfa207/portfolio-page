'use strict';

import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>Contact Me</h2>
              <hr className='star-primary'/>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h3>wesley.auyeung89@gmail.com</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
