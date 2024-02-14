import React from 'react';
import { Link } from 'react-router-dom';

import logoInsta from '../../../public/res/social/logo-insta.png';
import logoLinkedIn from '../../../public/res/social/logo-linkedin.png';
import logoYouTube from '../../../public/res/social/logo-youtube.png';

export default function SideNav() {
  return (
    <nav className="px-4 md:px-6 flex justify-end  items-center h-screen">
      <ul className="[&>*>*>img]:w-8 flex flex-col max-w-fit justify-between h-40">
        <li>
          <Link to="/#">
            <img src={logoInsta} alt="Instagram" />
          </Link>
        </li>
        <li>
          <Link to="/#">
            <img src={logoLinkedIn} alt="LinkedIn" />
          </Link>
        </li>
        <li>
          <Link to="/#">
            <img src={logoYouTube} alt="YouTube" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
