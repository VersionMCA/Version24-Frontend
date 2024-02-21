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
        <div className="bg-black bg-opacity-75 h-lvh homeContainer">
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
            <div className="flex items-center justify-center h-lvh flex-col">
              <img
                src="../../../public/res/home_hero_img.png"
                alt="Hero Element"
                className="md:h-72 h-40"
              />

              <div className="mt-9">
                <Button
                  designType="tertiary"
                  className="btn-register"
                  onClick={() => navigate('/about')}
                >
                  <span>Enter</span>
                  <i />
                </Button>
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
