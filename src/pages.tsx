import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build.js';

import Home from './pages/Index.js';

buildPage('index', ReactDOMServer.renderToStaticMarkup(
  <Home title="Andy's Project Website" description="Welcome to my website, it's static and splendid!" />
));
