import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build.js';

import Index from './pages/index.js';

buildPage('index', ReactDOMServer.renderToStaticMarkup(
  <Index title="Andy's Project Website" description="Put cool description here" />
));
