/* eslint-disable react/prop-types */
import React, { useRef } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.module.scss';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';

import logo from '/res/logo.png';

export default function Navbar({ bgWhite, noBgBlack }) {
  const navBar = useRef();
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50  ${bgWhite === true ? 'bg-white' : ''} ${!noBgBlack ? 'md:bg-black md:bg-opacity-20' : ''}`}
    >
      <nav
        className="container flex items-center justify-between py-2 lg:py-5 text-base md:text-lg uppercase min-w-full"
        ref={navBar}
      >
        <Link to="/" className="pl-4 md:pl-10">
          <img src={logo} alt="logo" className="h-8 md:h-12" />
        </Link>
        <NavMobile navBar={navBar} />
        <NavDesktop bgWhite={bgWhite} />
      </nav>
    </div>
  );
}
