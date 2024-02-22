import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MemberCard from '../../components/MemberCard/MemberCard';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
// import useModal from '../../hooks/useModal';
import './TeamPage.scss';

import teamInfo from './teamInfo';
import TransitionAnimation from '../../components/TransitionAnimation/TransitionAnimation';
// import Modal from '../../components/Modal.jsx/Modal';

export default function TeamPage() {
  const [displayTeam, setDisplayTeam] = useState(false);

  setTimeout(() => {
    setDisplayTeam(true);
  }, 1000);

  return displayTeam ? (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <Navbar />
        <section className="bg-black bg-opacity-75 min-h-lvh py-36 section__teams">
          <motion.div
            initial={{ opacity: 0, translateX: 0, translateY: -50 }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-center text-white text-3xl mb-10 tracking-[.3rem] font-primary font-bold">
              MEET THE <span className="text-primary">TEAM</span>
            </h1>
          </motion.div>
          <div>
            {teamInfo.map((team) => {
              return (
                <div key={team.id}>
                  <motion.div
                    initial={{ opacity: 0, translateX: 0, translateY: -50 }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-center text-white text-lg font-semibold tracking-[3px] uppercase font-primary my-20">
                      {team.header}
                    </h3>
                  </motion.div>
                  <div
                    className={`grid sm:grid-cols-2 m-auto w-fit md:gap-x-48 ${team.id !== '101' ? 'grid-cols-1 md:grid-cols-3  gap-x-20 gap-y-8 md:gap-y-32 px-24' : 'gap-y-8'}`}
                  >
                    {team.members.map((teamMember, i) => {
                      return (
                        <motion.div
                          key={teamMember.id}
                          initial={{
                            opacity: 0,
                            translateX: -50,
                            translateY: -50,
                          }}
                          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.3 }}
                        >
                          <MemberCard
                            key={teamMember.id}
                            teamMember={teamMember}
                            teamId={team.id}
                          />
                        </motion.div>
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
    </motion.div>
  ) : (
    <TransitionAnimation />
  );
}
