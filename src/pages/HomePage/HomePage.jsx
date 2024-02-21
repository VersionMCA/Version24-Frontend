/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import RightSideNav from '../../components/SideNav/RightSideNav';
import VersionTimer from '../../components/VersionTimer/VersionTimer';
import TransitionAnimation from '../../components/TransitionAnimation/TransitionAnimation';

import './HomePage.scss';
import Layout from '../../components/Layout/Layout';
import LeftSideNav from '../../components/SideNav/LeftSideNav';
import Button from '../../components/Button/Button';

export default function HomePage() {
  const [displayHome, setDisplayHome] = useState(false);

  const navigate = useNavigate();

  setTimeout(() => {
    setDisplayHome(true);
  }, 1000);

  return displayHome ? (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Layout noBgBlack>
        <div className="h-lvh homeContainer bg-black  sm:pt-0 pt-[10rem]">
          {' '}
          <motion.div
            initial={{
              opacity: 0,
              translateX: 0,
              translateY: -100,
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center md:justify-center h-lvh flex-col">
              <img
                src="/res/bg_home_icon.png"
                alt="Hero Element"
                className="md:h-36 h-28"
              />
              <div className="text-white font-primary flex justify-center flex-col items-center mt-8">
                <h1 className="text-5xl md:text-8xl font-black tracking-[5px] md:tracking-[10px] text-center uppercase">
                  Gensynth
                </h1>
                <p className="mt-4 font-semibold text-xs sm:text-base md:text-2xl tracking-[2.5px] md:tracking-[4px]">
                  SYNTHESIZED BRILLIANCE OF GEN-AI
                </p>
              </div>

              <div className="md:mt-10 mt-20">
                <Button
                  designType="tertiary"
                  className="btn-register"
                  onClick={() => navigate('/about')}
                >
                  <span>Enter</span>
                  <i />
                </Button>
              </div>
              <div className="flex-row text-white items-center md:hidden flex mt-32">
                <span className="w-20 h-[1px] bg-white flex" />
                <p className="mx-2 font-medium">22/03</p>
                <span className="w-20 h-[1px] bg-white flex" />
              </div>
            </div>
          </motion.div>
          <LeftSideNav />
          <RightSideNav />
          <motion.div
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5 }}
          >
            <VersionTimer />
          </motion.div>
        </div>
      </Layout>
    </motion.div>
  ) : (
    <TransitionAnimation bgImage="/res/home_hero_img.png" />
  );
}
