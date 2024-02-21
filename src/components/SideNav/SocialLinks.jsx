import React from 'react';
import { Link } from 'react-router-dom';
import logoInsta from '/res/social/logo-insta.png';
import logoLinkedIn from '/res/social/logo-linkedin.png';
import logoYouTube from '/res/social/logo-youtube.png';

function SocialLinks() {
  return (
    <>
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
    </>
  );
}

export default SocialLinks;
