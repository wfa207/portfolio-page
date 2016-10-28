'use strict';

export const buttons = [
  { link: 'https://github.com/wfa207', name: 'github' },
  { link: 'https://www.linkedin.com/in/wesleyauyeung', name: 'linkedin' }
];

export const navLinks = ['page-top', 'portfolio', 'about', 'contact'];

export const projects = [
  { link: 'airMapper',
    img: require('../../assets/img/portfolio/airMapper.png'),
    modal: {
      title: 'Air Mapper',
      url: 'https://air-mapper.herokuapp.com',
      description: 'Air Mapper is an application designed to calculate the distance between two US airports in miles. The core stack used to put this application together was comprised of: Node, Express and React. In addition, several frameworks, in addition to a handful of API\'s, were used in putting together this application, including: Webpack, Babel, Bootstrap, Redux (coupled with React-Redux), and Google\'s Maps API',
      date: 'October 2016',
      projectType: 'Web development'
    }
  }, { link: 'downTime',
    img: require('../../assets/img/portfolio/downTime_cropped.png'),
    modal: {
      title: 'DownTime',
      url: '#',
      description: 'My teammates and I created DownTime to serve as our capstone project, our final project as students at Fullstack Academy. The application was built in three weeks and is designed to track a user\'s location throughout the day and aggregating this data to provide a visualization of how the user spent his or her time. DownTime was our first foray into mobile development as well as our first attempt at using the React framework. In addition to React-Native, we also incorporated several open-source libraries including react-native-store and react-native-maps.',
      date: 'July 2016',
      teamMembers: ['Tom Bradley', 'Jon Rim'],
      projectType: 'Mobile Development'
    } 
  }/*, { link: 'notSoSpurious',
    img: require('../../assets/img/portfolio/cake.png'),
    modal: {
      title: 'Not-So-Spurious Correlations',
      url: '#',
      description: 'My partner and I designed Not-So-Spurious Correlations in response to the rising popularity of wearables and increasing availability of personal data. By integrating multiple API\'s including Github and Fitbit, we aimed to help users visualize correlations between different sources of data, such as the number of commits a user made mapped against the number of steps he or she took that day. The website was built in the span of four days on Node, Express, Sequelize, and Angular',
      date: 'July 2016',
      teamMembers: ['Matt Landers'],
      projectType: 'Web Development'
    } 
  }*/, { link: 'towelTown',
    img: require('../../assets/img/portfolio/towelTown.png'),
    modal: {
      title: 'Towel Town',
      url: '#',
      description: 'Towel Towel was developed over the course of two weeks and was the first full-featured project completed as part of the Fullstack Academy curriculum. The website is a an electronic store selling towels rated according to various characteristics, including fiber count, softness, and absorption. Towel Town was built using Node, Express, Sequelize, AngularJS, Gulp and was tested using Mocha, Chai, and Karma.',
      date: 'July 2016',
      teamMembers: ['Zach Levine', 'Tom Bradley', 'Mike Chua'],
      projectType: 'Web Development'
    } 
  }];

export const inputFields = ['name', 'email address', 'phone number', 'message'];