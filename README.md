# [My Portfolio Page](http://wes-auyeung.herokuapp.com)

## Installation

Run `npm install` to install all dependencies. Afterwards, run `npm start` to set up a webpack development server, featuring hot-reloading running on [http://localhost:8080](http://localhost:8080). The console will state that the server is running on port 7000, which has a proxy set up to route to the development server. A production environment can be simulated by running `npm run prod`, at which point the website will be served locally at [http:localhost:7000](http:localhost:7000). The primary difference between the development and production servers is that the production server has further optimizations including more minimized css and build files.

## Deployment

The website is currently available at [http://wes-auyeung.herokuapp.com](http://wes-auyeung.herokuapp.com). To build and re-deploy, run `git push heroku master`. 

##Technologies Used

This website was built using **Node**, **Express** and **React** and uses **Webpack** for bundling, using *Babel* for transpiling.