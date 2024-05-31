import React from 'react';
import Wrapper from '../wrapper.js';
import AboutInfo from '../includes/about_info.js'
import MenuList from '../includes/menu_list.js'
function Index(props) {
    return (
        <Wrapper {...props}>
          <AboutInfo />
	  <hr className="clearLeft" />
	  <MenuList />
        </Wrapper>
    );
};

export default Index;
