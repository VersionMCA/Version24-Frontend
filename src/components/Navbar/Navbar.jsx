import React from 'react';

import './Navbar.module.scss';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

import logo from '../../../public/res/logo.png';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0">
      <nav className="container flex items-center justify-between py-2 lg:py-5 text-sm md:text-lg uppercase bg-black md:bg-transparent">
        <div className="pl-2 md:pl-10">
          <img src={logo} alt="logo" className="h-8 md:h-12" />
        </div>
        <NavMobile />
        <NavDesktop />
      </nav>
    </div>
  );
}
