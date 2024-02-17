/* eslint-disable react/prop-types */
import React from 'react';

import './Navbar.module.scss';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

import logo from '../../../public/res/logo.png';

export default function Navbar({ bgWhite }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10  ${bgWhite === true ? 'bg-white' : ''}`}
    >
      <nav className="container flex items-center justify-between py-2 lg:py-5 text-sm md:text-lg uppercase bg-neutral-950 md:bg-transparent">
        <div className="pl-2 md:pl-10">
          <img src={logo} alt="logo" className="h-8 md:h-12" />
        </div>
        <NavMobile />
        <NavDesktop bgWhite={bgWhite} />
      </nav>
    </div>
  );
}
