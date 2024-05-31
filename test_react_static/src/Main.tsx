import React from 'react';
//import Nav from './Nav';
//import Footer from './Footer';

function Main({ title, description, ...props }) {
  return (
    <html lang="en">
      <head>
        <title>{ title }</title>
        <meta charSet="utf-8" />
        <meta name="description" content={ description } />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="/css/styles.min.css" rel="stylesheet" />
        { props.head }
      </head>
      <body>
        { props.children }
      </body>
    </html>
  );
};

export default Main;
