import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { buildPage } from './build.js';

import Wrapper from './wrapper.js';

import Index from './pages/index.js';
import MenuPage from './pages/menu_page.js';
import AboutPage from './pages/about_page.js';


buildPage('index.html', ReactDOMServer.renderToStaticMarkup(
  <Index title="Andy's Project Website" description="Put cool description here" />
));

buildPage('menuPage.html', ReactDOMServer.renderToStaticMarkup(
  <MenuPage title="Andy's Project Website" description="Put cool description here" />
));

buildPage('aboutPage.html', ReactDOMServer.renderToStaticMarkup(
  <AboutPage title="Andy's Project Website" description="Put cool description here" />
));

buildPage('aboutPage.html', ReactDOMServer.renderToStaticMarkup(
  <AboutPage title="Andy's Project Website" description="Put cool description here" />
));

buildPage("contactPage.html", ReactDOMServer.renderToStaticMarkup(
  <Wrapper title="Andy's Project Website" description="Put cool description here">
    <p>Phone number: 14082073992</p>
    <p>Email: chengong456@qq.com</p>
  </Wrapper>
));
