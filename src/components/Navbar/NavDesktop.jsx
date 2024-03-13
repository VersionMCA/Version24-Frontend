/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'react-router-dom';
import routes from './NavRoutes';
import adminRoutes from './AdminRoutes';
import ScrambleText from './ScrambleText';
import { useUser } from '../../contexts/UserContext';

export default function NavDesktop({ bgWhite }) {
  const { user, logout } = useUser();

  ScrambleText();

  const customRoutes = user && user.role === 'admin' ? adminRoutes : routes;

  return (
    <ul className="hidden lg:flex lg:items-center pr-5 gap-16">
      {customRoutes.map((route) => {
        return (
          <li key={route.id} className="w-32 text-center">
            {route.title === 'Login' && user ? (
              <span
                className={`flex justify-center cursor-pointer ${bgWhite === true ? 'text-black' : 'text-offWhite'} gap-1 transition-all codedText`}
                onClick={logout}
                role="button"
              >
                Logout
              </span>
            ) : (
              <Link
                to={route.href}
                className={`flex justify-center  ${bgWhite === true ? 'text-black' : 'text-offWhite'} gap-1 transition-all codedText`}
              >
                {route.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
