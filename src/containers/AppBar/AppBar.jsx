import React from 'react';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import './AppBar.css'

function AppBar(props) {
  return (
    <div className="container">
      <div className="logo"></div>
      {/* <div className="logo"></div> */}
      <DropDownMenu />
    </div>
  );
}

export default AppBar;
