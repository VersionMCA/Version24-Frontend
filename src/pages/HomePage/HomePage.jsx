/* eslint-disable prettier/prettier */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import RightSideNav from '../../components/SideNav/RightSideNav';
import VersionTimer from '../../components/VersionTimer/VersionTimer';

import './HomePage.scss';
import Layout from '../../components/Layout/Layout';
import LeftSideNav from '../../components/SideNav/LeftSideNav';
import Button from '../../components/Button/Button';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout noBgBlack>
      <div className="h-lvh homeContainer bg-black  sm:pt-0 pt-[10rem]">
        {' '}
        <div className="flex items-center md:justify-center h-lvh flex-col">
          <img
            src="/res/bg_home_icon.png"
            alt="Hero Element"
            className="md:h-36 h-28"
          />
          <div className="text-white font-primary flex justify-center flex-col items-center mt-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-[.3rem] md:tracking-[.65rem] text-center uppercase">
              Gensynth
            </h1>
            <p className="mt-4 font-medium text-xs sm:text-base md:text-2xl tracking-[2px] md:tracking-[4px]">
              SYNTHESIZED BRILLIANCE OF GEN-AI
            </p>
          </div>

          <div className="md:mt-10 mt-20">
            <Button
              designType="tertiary"
              className="btn-register"
              onClick={() => navigate('/events')}
            >
              <span>Enter</span>
              <i />
            </Button>
          </div>
        </div>
        <LeftSideNav />
        <RightSideNav />
        {/* <motion.div
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            animate={{ opacity: 1, translateY: 0, translateX: 0 }}
            transition={{ duration: 1.5 }}
          > */}
        <VersionTimer />
        {/* </motion.div> */}
      </div>
    </Layout>
  );
}
