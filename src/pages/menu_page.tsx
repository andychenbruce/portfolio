import React from 'react';
import Wrapper from '../wrapper.js';

import MenuList from '../includes/menu_list.js'
function MenuPage(props) {
    return (
        <Wrapper {...props}>
          <MenuList />
        </Wrapper>
    );
};

export default MenuPage;
