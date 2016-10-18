'use strict';

import React, { Component } from 'react';
import { capFirstLetter } from '../../../utils';

export default class NavButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.navClass}>
        <a href={'#' + this.props.navLink}>{capFirstLetter(this.props.navLink) }</a>
      </li>
    );
  }
}
