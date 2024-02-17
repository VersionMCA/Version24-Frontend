import React from 'react';

import './TeamPage.scss';
import MemberCard from '../../components/MemberCard/MemberCard';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const teamInfo = [
  {
    id: '101',
    header: 'Head of the department & Staff Advisor',
    members: [
      {
        id: '201',
        name: 'Dr. Michael Arock',
        image: '/radhe.jpg',
        designation: 'HOD',
        github: '',
        linkedin: '',
      },
      {
        id: '202',
        name: 'Dr.(Mrs.) S. Sangeetha',
        image: '/radhe.jpg',
        designation: 'Staff Advisor',
        github: '',
        linkedin: '',
      },
    ],
  },
  {
    id: '102',
    header: 'Central Execution Committee',
    members: [
      {
        id: '301',
        name: 'Abhiusnees Nandi',
        image: '/radhe.jpg',
        designation: 'Secretary',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '302',
        name: 'Pawan Agarwal',
        image: '/radhe.jpg',
        designation: 'Treasurer',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '303',
        name: 'Chirag Agarwal',
        image: '/radhe.jpg',
        designation: 'PPC Head',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '304',
        name: 'Aman Kumar Singh',
        image: '/radhe.jpg',
        designation: 'PRC Head',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '305',
        name: 'Mokshda Dave',
        image: '/radhe.jpg',
        designation: 'EEC Head',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '306',
        name: 'Chakshu Verma',
        image: '/radhe.jpg',
        designation: 'EEC Head',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '307',
        name: 'Nandini Kumari',
        image: '/radhe.jpg',
        designation: 'ARC Head',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '308',
        name: 'Tushar Nanda',
        image: '/radhe.jpg',
        designation: 'HRC Head',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
      {
        id: '309',
        name: 'Harsha Jha',
        image: '/radhe.jpg',
        designation: 'HRC Head',
        github: 'https://www.github.com',
        linkedin: 'https://w',
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <Navbar bgWhite />
      <div className="bg-black bg-opacity-75 min-h-lvh py-36">
        <h1 className="text-center text-white text-3xl mb-10 font-primary">
          MEET THE <span className="text-primary">TEAM</span>
        </h1>
        <div>
          {teamInfo.map((team) => {
            return (
              <div key={team.id}>
                <h3 className="text-center text-white text-lg uppercase font-primary my-14">
                  {team.header}
                </h3>
                <div
                  className={`${team.id !== '101' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-16 px-24' : 'flex items-center justify-between flex-col md:flex-row px-44'}`}
                >
                  {team.members.map((teamMember) => {
                    return (
                      <MemberCard key={teamMember.id} teamMember={teamMember} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
