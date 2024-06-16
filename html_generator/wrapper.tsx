import React from "react";
import Navbar from "./includes/navbar.js";

function Wrapper({ title, ...props }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link href="/style.css" rel="stylesheet" />
        {props.head}
      </head>
      <body>
        <div className="wrapperDiv">
          <Navbar />
          <div className="headerDiv">
            <h1>{title}</h1>
          </div>

          <div className="contentDiv">{props.children}</div>
        </div>
      </body>
    </html>
  );
}

export default Wrapper;
