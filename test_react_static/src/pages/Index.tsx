import React from 'react';
import Main from '../Main.js';
import AboutInfo from '../includes/about_info.js'
import MenuList from '../includes/menu_list.js'
function Index(props) {
    return (
        <Main {...props}>
          <AboutInfo />
	  <hr className="clearLeft" />
	  <MenuList />
        </Main>
    );
};

export default Index;
