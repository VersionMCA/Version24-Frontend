/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import routes from './NavRoutes';
import ScrambleText from './ScrambleText';

export default function NavDesktop({ bgWhite }) {
  ScrambleText();

  return (
    <ul className="hidden lg:flex lg:items-center pr-5 gap-16">
      {routes.map((route) => {
        return (
          <li key={route.id} className="w-32 text-center">
            <Link
              to={route.href}
              className={`flex justify-center  ${bgWhite === true ? 'text-black' : 'text-white'} gap-1 transition-all codedText`}
            >
              {route.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
