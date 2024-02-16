/* eslint-disable react/prop-types */
import React from 'react';

import './MemberCard.scss';

// eslint-disable-next-line react/prop-types
export default function MemberCard({ teamMember }) {
  return (
    <div className="relative bg-transparent flex flex-col flex-wrap items-center justify-around h-80 w-48 m-auto">
      <div className="absolute top-0 left-0 h-16 w-16 border-l-2 border-t-2 border-primary">
        {}
      </div>
      <div className="relative group">
        <a
          className={`absolute top-20 ml-10 z-10 text-primary opacity-0 ${teamMember.github !== '' ? 'group-hover:opacity-100' : ''} font-secondary underline`}
          href={teamMember.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className={`absolute top-36 ml-8 z-10 text-primary opacity-0 ${teamMember.github !== '' ? 'group-hover:opacity-100' : ''} font-secondary underline`}
          href={teamMember.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <img
          src="/member/radhe.jpg"
          alt="person"
          className={`h-56 w-36 pt-4 ${teamMember.github !== '' ? 'group-hover:opacity-20' : ''}`}
        />
      </div>
      <h3 className="text-primary text-sm font-secondary">{teamMember.name}</h3>
      <h3 className="text-white text-sm font-secondary pb-4">
        {teamMember.designation}
      </h3>
      <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-primary">
        {}
      </div>
    </div>
  );
}
