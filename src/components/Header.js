import React from 'react';


const Header = (props) => (
  <header className="header">
    <h1 className="header__heading">{ props.children }</h1>
  </header>
)

export default Header;