'use strict';

import React, { Component } from 'react';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className='col-sm-4 portfolio-item'>
        <a href={'#' + this.props.link} className='portfolio-link' data-toggle='modal'>
          <div className='caption'>
            <div className='caption-content'>
              <i className='fa fa-search-plus fa-3x'></i>
            </div>
          </div>
          <img src={this.props.img} className='img-responsive'/>
        </a>
      </div>
      </div>
    );
  }
}
