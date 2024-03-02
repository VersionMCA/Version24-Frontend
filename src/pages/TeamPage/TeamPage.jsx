/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
import React, { useRef, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroller';

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

  const [itemsToLoad, setItemsToLoad] = useState([teamInfo[0]]);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const teamIdx = useRef(0);

  const loadFunc = () => {
    teamIdx.current += 1;
    if (teamIdx.current < teamInfo.length) {
      setItemsToLoad((arr) => [...arr, teamInfo[teamIdx.current]]);
    } else {
      setHasMoreItems(false);
    }
  };

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
            <h1 className="text-center text-offWhite text-3xl md:text-4xl mb-10 tracking-[.3rem] font-primary font-bold">
              MEET THE <span className="text-primary">TEAM</span>
            </h1>
          </motion.div>
          <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={hasMoreItems}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            <div>
              {itemsToLoad.map((team) => {
                return (
                  <div key={team.id}>
                    <motion.div
                      initial={{ opacity: 0, translateX: 0, translateY: -50 }}
                      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-center text-offWhite  text-lg md:text-2xl font-semibold tracking-[3px] uppercase font-primary my-20">
                        {team.header}
                      </h3>
                    </motion.div>
                    {/* If team size is 5, means single head, if 4 then 2 head */}
                    <div
                      className={`grid sm:grid-cols-1 m-auto w-fit gap-x-48 ${team.id.length === 5 ? '' : team.id.length === 4 ? 'grid sm:grid-cols-2 m-auto w-fit md:gap-x-48' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 md:gap-y-32 xl:px-24'}`}
                    >
                      {team.members.map((teamMember, i) => {
                        return (
                          <motion.div
                            key={teamMember.id}
                            initial={{
                              opacity: 0,
                              translateX: 0,
                              translateY: -50,
                            }}
                            animate={{
                              opacity: 1,
                              translateX: 0,
                              translateY: 0,
                            }}
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
          </InfiniteScroll>
        </section>
        <Footer />
      </>
    </motion.div>
  ) : (
    <TransitionAnimation />
  );
}
