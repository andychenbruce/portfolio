import React from "react";

function Navbar() {
  return (
    <div className="mainMenuBarDiv">
      <ul className="mainMenuBarList">
        <li className="mb_li">
          <a className="menu_button" href="/">
            Home
          </a>
        </li>
        <li className="mb_li">
          <a className="menu_button" href="/menuPage.html">
            Menu
          </a>
        </li>
        <li className="mb_li">
          <a className="menu_button" href="/aboutPage.html">
            About
          </a>
        </li>
        <li className="mb_li">
          <a className="menu_button" href="/contactPage.html">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
