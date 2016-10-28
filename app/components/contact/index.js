'use strict';

import React, { Component } from 'react';
import InputField from './InputField';
import { inputFields } from '../../data';
import { htmlAttrGen } from '../../../utils';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let elem = event.target;
    this.setState({ [elem.id]: elem.value.substr(0, 255) });
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
