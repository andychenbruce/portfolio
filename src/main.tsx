import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build.js';

import Index from './pages/index.js';
import MenuPage from './pages/menu_page.js';

buildPage('index.html', ReactDOMServer.renderToStaticMarkup(
  <Index title="Andy's Project Website" description="Put cool description here" />
));

buildPage('menuPage.html', ReactDOMServer.renderToStaticMarkup(
  <MenuPage title="Andy's Project Website" description="Put cool description here" />
));
