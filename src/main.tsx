import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build.js';

import Wrapper from './wrapper.js';

import Index from './pages/index.js';
import MenuPage from './pages/menu_page.js';
import AboutPage from './pages/about_page.js';

import Project2Body from './pages/projects/2body.js';

import Boltzman from './pages/projects/boltzman_distribution.js';

import Capstone from './pages/projects/capstone.js';


buildPage('index.html', ReactDOMServer.renderToStaticMarkup(
  <Index title="Andy's Project Website" description="Put cool description here" />
));

buildPage('menuPage.html', ReactDOMServer.renderToStaticMarkup(
  <MenuPage title="Menu" description="Put cool description here" />
));

buildPage('aboutPage.html', ReactDOMServer.renderToStaticMarkup(
  <AboutPage title="About" description="Put cool description here" />
));

buildPage("contactPage.html", ReactDOMServer.renderToStaticMarkup(
  <Wrapper title="Contact" description="Put cool description here">
    <p>Phone number: 14082073992</p>
    <p>Email: chengong456@qq.com</p>
  </Wrapper>
));

buildPage("helpPage.html", ReactDOMServer.renderToStaticMarkup(
  <Wrapper title="Help" description="Put cool description here">
    <h1>Help</h1>
    <h1>Help</h1>
    <h1>Help</h1>
  </Wrapper>
));

buildPage("projects/2body/index.html", ReactDOMServer.renderToStaticMarkup(
  <Project2Body title="Closed Form Solution to the Two Body Problem" description="Put cool description here"/>
));

buildPage("projects/boltzman_distribution/index.html", ReactDOMServer.renderToStaticMarkup(
  <Boltzman title="Non-Ideal Gas Simulation and Boltzmann's Law" description="Put cool description here"/>
));

buildPage("projects/capstone/index.html", ReactDOMServer.renderToStaticMarkup(
  <Capstone title="Capstone: A Robot for Sustainable Agriculture" description="Put cool description here"/>
));
