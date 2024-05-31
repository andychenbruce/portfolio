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

import DeltaGcode from './pages/projects/delta_gcode.js';

import DepthPerception from './pages/projects/depth_perception.js';
import Fire from './pages/projects/fire.js';
import NavierStokes from './pages/projects/fluid_sim_navier_stokes.js';

import Icosahedron from './pages/projects/icosahedron.js';

import InterMolecularForce from './pages/projects/inter_molecular_forces.js';
import Jello from './pages/projects/jello.js';

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

buildPage("projects/delta_gcode/index.html", ReactDOMServer.renderToStaticMarkup(
  <DeltaGcode title="Controlling a Delta-X Robot Arm with G-Code" description="Put cool description here"/>
));


buildPage("projects/depth_perception/index.html", ReactDOMServer.renderToStaticMarkup(
  <DepthPerception title="Depth Perception in Images of Seedlings" description="Put cool description here"/>
));

buildPage("projects/fire/index.html", ReactDOMServer.renderToStaticMarkup(
  <Fire title="Smoke and Fire Simulation" description="Put cool description here"/>
));


buildPage("projects/fluid_sim_navier_stokes/index.html", ReactDOMServer.renderToStaticMarkup(
  <NavierStokes title="Fluid Flow Simulation with the Navier-Stokes Equation" description="Put cool description here"/>
));

buildPage("projects/icosahedron/index.html", ReactDOMServer.renderToStaticMarkup(
  <Icosahedron title="Drawing a Sphere by Recursive Segmentation of an Icosahedron" description="Put cool description here"/>
));

buildPage("projects/inter_molecular_forces/index.html", ReactDOMServer.renderToStaticMarkup(
  <InterMolecularForce title="Intermolecular forces condensation simulation" description="Put cool description here"/>
));

buildPage("projects/jello/index.html", ReactDOMServer.renderToStaticMarkup(
  <Jello title="Simulating Jello with Hooke's Law" description="Put cool description here"/>
));


