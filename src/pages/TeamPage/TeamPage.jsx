import React from 'react';
import MemberCard from '../../components/MemberCard/MemberCard';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
// import useModal from '../../hooks/useModal';
import './TeamPage.scss';

import teamInfo from './teamInfo';
// import Modal from '../../components/Modal.jsx/Modal';

export default function TeamPage() {
  // const [toggle, visible] = useModal();

  /*
  <Modal visible={visible} toggle={toggle}>
        <div className="modal__content flex justify-center flex-col">
          <h2 className="text-xl font-semibold mb-10">
            Message From{' '}
            <span className="text-primary">Head Of Department</span>
          </h2>
          <p className="font-secondary text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
      </Modal>

  */

  return (
    <>
      <Navbar />
      <section className="bg-black bg-opacity-75 min-h-lvh py-36 section__teams">
        <h1 className="text-center text-white text-3xl mb-10 tracking-[5px] font-primary font-bold">
          MEET THE <span className="text-primary">TEAM</span>
        </h1>
        <div>
          {teamInfo.map((team) => {
            return (
              <div key={team.id}>
                <h3 className="text-center text-white text-lg font-semibold tracking-[3px] uppercase font-primary my-20">
                  {team.header}
                </h3>
                <div
                  className={`grid sm:grid-cols-2 m-auto w-fit gap-x-48 ${team.id !== '101' ? 'grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-x-20 gap-y-32 px-24' : ''}`}
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
      </section>
      <Footer />
    </>
  );
}
