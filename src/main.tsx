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
      <p>Phone number: 14082073992</p>
      <p>Email: chengong456@qq.com</p>
    </Wrapper>,
  ),
);

buildPage(
  "helpPage.html",
  ReactDOMServer.renderToStaticMarkup(
    <Wrapper title="Help" >
      <h1>Help</h1>
      <h1>Help</h1>
      <h1>Help</h1>
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
