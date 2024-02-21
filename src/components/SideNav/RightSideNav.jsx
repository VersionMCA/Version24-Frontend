import React from 'react';
import { Link } from 'react-router-dom';
import logoInsta from '/res/social/logo-insta.png';
import logoLinkedIn from '/res/social/logo-linkedin.png';
import logoYouTube from '/res/social/logo-youtube.png';

export default function RightSideNav() {
  return (
    <nav className="px-4 md:px-6 flex justify-end items-center">
      <ul className="[&>*>*>img]:w-6 md:[&>*>*>img]:w-8  md:flex flex-col max-w-fit justify-between hidden md:h-40  fixed top-1/3">
        <li className="hover:scale-110 transition-all">
          <Link to="/#">
            <img src={logoInsta} alt="Instagram" />
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link to="/#">
            <img src={logoLinkedIn} alt="LinkedIn" />
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link to="/#">
            <img src={logoYouTube} alt="YouTube" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
