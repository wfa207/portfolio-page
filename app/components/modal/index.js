'use strict';

import React, { Component } from 'react';
import { arrayConcat } from '../../../utils';

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let teamMembersProp = this.props.teamMembers;
    let teamNum = teamMembersProp ? teamMembersProp.length : null;
    let teamStr = arrayConcat(teamMembersProp);
    let teamHTML;
    if (teamNum > 0) { teamHTML = <li>{'Team Member' + (teamNum > 1 ? 's' : '') + ':'} <strong>{teamStr}</strong></li>; }
      
    return (
      <div className='portfolio-modal modal fade' id={this.props.link} tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-content'>
          <div className='close-modal' data-dismiss='modal'>
            <div className='lr'>
              <div className='rl'>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2><a href={this.props.url}>{this.props.title}</a></h2>
                  <hr className='star-primary'/>
                  <img src={this.props.img} className='img-responsive img-centered'/>
                  <p>{this.props.description}</p>
                  <ul className='list-inline item-details'>
                    <li>Date: <strong>{this.props.date}</strong></li>
                    { teamHTML }
                    <li>Project Type: <strong>{this.props.projectType}</strong></li>
                  </ul>
                  <button type='button' className='btn btn-default' data-dismiss='modal'><i className='fa fa-times'></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
