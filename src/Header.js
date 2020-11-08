import React from 'react';
import './assets/main.css';

function Header(props) {
  return (<header className="container mx-auto p-2">
      <h1 className="font-cursive text-pallete-black text-5xl">Random Bars <span className="bottom-0 bg-pallete-black font-cursive text-pallete-lightorange text-xl">Find a new music to listen!</span></h1>
    </header>);
}

export default Header;