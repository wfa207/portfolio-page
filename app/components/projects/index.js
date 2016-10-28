'use strict';

import React, { Component } from 'react';
import Project from './project';
import { projects } from '../../data';
import Modal from '../modal';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <section id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>Projects</h2>
              <hr className='star-primary'/>
            </div>
          </div>
          <div className='row'>
            { projects.map((project, i) => <Project
              key={i + 1}
              link={project.link}
              img={project.img}/>) }
          </div>
        </div>
      </section>
      { projects.map((project, i) => <Modal
        link={project.link}
        img={project.img}
        {...project.modal}/>) }
      </div>
    );
  }
}