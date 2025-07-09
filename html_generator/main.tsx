import React from "react";
import ReactDOMServer from "react-dom/server";
import { buildPage } from "./build.js";

import Wrapper from "./wrapper.js";

import Index from "./pages/index.js";
import MenuPage from "./pages/menu_page.js";
import {ProjectsList} from "./includes/menu_list.js";
import AboutPage from "./pages/about_page.js";

buildPage(
  "index.html",
  ReactDOMServer.renderToStaticMarkup(
    <Index
      title="Andy's Project Website"
    />,
  ),
);

buildPage(
  "menuPage.html",
  ReactDOMServer.renderToStaticMarkup(
    <MenuPage title="Menu"  />,
  ),
);

buildPage(
  "aboutPage.html",
  ReactDOMServer.renderToStaticMarkup(
    <AboutPage title="About"  />,
  ),
);

buildPage(
  "contactPage.html",
  ReactDOMServer.renderToStaticMarkup(
    <Wrapper title="Contact" >
      <address>
	<a href="mailto:andy@andycbruce.com">andy@andycbruce.com</a>
	<br/>
	<a href="tel:+14082073992">+1(408)207-3992</a>
	<br/>
	<a href="https://github.com/andychenbruce">Github</a>
	<br/>
	<a href="/keys.txt">PGP keys</a>
      </address>
    </Wrapper>,
  ),
);

ProjectsList.forEach((project) => {
  buildPage(
    `projects/${project.path}/index.html`,
    ReactDOMServer.renderToStaticMarkup(
      <project.react
	title={project.title}
      />,
    )
  );
});
