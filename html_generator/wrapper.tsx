import React from "react";
import Navbar from "./includes/navbar.js";

function Wrapper({ title, head, children }:
{
  children: any;
  head? : React.ReactElement;
  title: string;

}): React.ReactElement {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link href="/style.css" rel="stylesheet" />
        {head}
      </head>
      <body>
        <div className="wrapperDiv">
          <Navbar />
          <div className="headerDiv">
            <h1>{title}</h1>
          </div>
          <div className="contentDiv">{children}</div>
        </div>
      </body>
    </html>
  );
}

export default Wrapper;
