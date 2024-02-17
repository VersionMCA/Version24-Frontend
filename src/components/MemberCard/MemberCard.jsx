/* eslint-disable react/prop-types */
import React from 'react';

import './MemberCard.scss';

// eslint-disable-next-line react/prop-types
export default function MemberCard({ teamMember }) {
  return (
    <div className="relative bg-transparent flex flex-col flex-wrap items-center justify-around h-96 m-auto">
      <div className="absolute top-0 left-0 h-16 w-16 border-l-[5px] border-t-[5px] border-primary">
        {}
      </div>
      <div className="relative group overflow-hidden">
        {teamMember.github && (
          <a
            className="absolute top-20 ml-10 z-10 text-primary opacity-0 group-hover:opacity-100 font-secondary underline"
            href={teamMember.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        )}
        {teamMember.linkedin && (
          <a
            className="absolute top-36 ml-8 z-10 text-primary opacity-0 group-hover:opacity-100 font-secondary underline"
            href={teamMember.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        )}
        <img
          src="/member/radhe.jpg"
          alt="person"
          className={`grayscale h-72 w-[230px] object-cover p-6 ${teamMember.github !== '' ? 'group-hover:opacity-20' : ''}`}
        />
      </div>
      <h4 className="text-primary text-sm mt-[-40px]">{teamMember.name}</h4>
      <h4 className="text-white text-sm pb-4 mt-[-30px]">
        {teamMember.designation}
      </h4>
      <div className="absolute bottom-0 right-0 h-16 w-16 border-b-[5px] border-r-[5px] border-primary">
        {}
      </div>
    </div>
  );
}
