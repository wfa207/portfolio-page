'use strict';

import React, { Component } from 'react';
import { capFirstLetter, htmlAttrGen } from '../../../utils';

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let label = this.props.label;
    let displayLabel = capFirstLetter(label);
    let attr = htmlAttrGen(label);
    return (
      <div className='row control-group'>
        <div className='form-group col-xs-12 floating-label-form-group controls'>
          <label>{displayLabel}</label>
          <input type='text' className='form-control' placeholder={displayLabel} id={attr} required data-validation-required-message={'Please enter your ' + label + '.'} onChange={this.props.handleChange}/>
          <p className='help-block text-danger'></p>
        </div>
      </div>
    );
  }
}
