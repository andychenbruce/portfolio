import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build.js';

// get the component
import Home from './pages/Index.js';
//import Contact from '../components/pages/Contact';

// build the page
buildPage('index', ReactDOMServer.renderToStaticMarkup(<Home title="My Website" description="Welcome to my website, it's static and splendid!" />));
//buildPage('contact', ReactDOMServer.renderToStaticMarkup(<Contact title="Contact Me" description="Get in touch, I'd love to hear from you!" />));
