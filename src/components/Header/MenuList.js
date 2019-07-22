import React from 'react';
import Menu from './Menu';

const MenuList = ({ menuList }) => {
  return (
    <ul className="gnb-list">
      {
        menuList.map((menu, idx) => <li><Menu key={idx} name={menu.name} url={menu.href} /></li>)
      }
    </ul>
  );
};

export default MenuList;
