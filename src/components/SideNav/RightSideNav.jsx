import React from 'react';
import SocialLinks from './SocialLinks';

export default function RightSideNav() {
  return (
    <nav className="px-4 md:px-6 flex justify-end items-center">
      <ul className="[&>*>*>img]:w-6 md:[&>*>*>img]:w-8  md:flex flex-col max-w-fit justify-between hidden md:h-40  fixed top-1/3">
        <SocialLinks />
      </ul>
    </nav>
  );
}
