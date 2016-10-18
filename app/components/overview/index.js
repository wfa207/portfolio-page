'use strict';

import React, { Component } from 'react';
import SocialBtn from '../social_button';
import { buttons } from '../../data';

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <img className='img-responsive' src={require('../../../assets/img/profile_icon.png')}/>
              <div className='intro-text'>
                <span className='name'>Wes Auyeung</span>
                <hr className='star-light'/>
                <span className='skills'>Web Developer - Software Engineer</span>
                <ul className='list-inline'>
                  { buttons.map(elem => <SocialBtn
                    key={elem.name}
                    link={elem.link}
                    icon={elem.name}/>) }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
