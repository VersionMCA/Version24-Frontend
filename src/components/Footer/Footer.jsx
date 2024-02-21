import React from 'react';

export default function Footer() {
  return (
    <footer className="text-white py-4 fixed bottom-0 w-full bg-black bg-opacity-70 px-12">
      <p className="text-xs md:text-base text-center">
        Made With Love 💖 By Version{' '}
        <span className="hidden md:inline">Web Team</span>
      </p>
    </footer>
  );
}
