'use strict';

import React, { Component } from 'react';

export default class SocialBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <a className='btn-social btn-outline' href={this.props.link}><i className={'fa fa-fw fa-' + this.props.icon}></i></a>
      </li>
    );
  }
}
