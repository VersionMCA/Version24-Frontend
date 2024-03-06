import React from 'react';
import { Link } from 'react-router-dom';
import logoInsta from '/res/social/logo-insta.png';
import logoLinkedIn from '/res/social/logo-linkedin.png';
import logoYouTube from '/res/social/logo-youtube.png';

function SocialLinks() {
  return (
    <>
      <li className="hover:scale-110 transition-all">
        <Link to="https://www.instagram.com/version_nit_trichy?igsh=djdiMmhvbTVyYjc5">
          <img src={logoInsta} alt="Instagram" />
        </Link>
      </li>
      <li className="hover:scale-105">
        <Link to="https://www.linkedin.com/in/version-mca-nitt-4b2384221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <img src={logoLinkedIn} alt="LinkedIn" />
        </Link>
      </li>
      <li className="hover:scale-105">
        <Link to="https://www.instagram.com/version_nit_trichy?igsh=djdiMmhvbTVyYjc5">
          <img src={logoYouTube} alt="YouTube" />
        </Link>
      </li>
    </>
  );
}

export default SocialLinks;
