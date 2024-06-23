import React from "react";
import Wrapper from "../wrapper.js";

import MenuList from "../includes/menu_list.js";
function MenuPage(props: any) {
  return (
    <Wrapper {...props}>
      <MenuList />
    </Wrapper>
  );
}

export default MenuPage;
