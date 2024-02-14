import React from 'react';
import { Link } from 'react-router-dom';
import routes from './NavRoutes';

export default function NavDesktop() {
  return (
    <ul className="hidden lg:flex lg:items-center pr-2 gap-16">
      {routes.map((route) => {
        return (
          <li key={route.id} className="w-32 text-center">
            <Link
              to={route.href}
              className="flex items-center text-white gap-1 transition-all"
            >
              {route.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
