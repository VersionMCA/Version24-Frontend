import React from 'react';
import RightSideNav from '../../components/SideNav/RightSideNav';
import VersionTimer from '../../components/VersionTimer/VersionTimer';

import './HomePage.scss';
import Layout from '../../components/Layout/Layout';

export default function HomePage() {
  return (
    <Layout noBgBlack>
      <div className="bg-black bg-opacity-75 h-lvh homeContainer">
        <div className="flex items-center justify-center h-lvh">
          <img
            src="../../../public/res/home_hero_img.png"
            alt="Hero Element"
            className="md:h-72 h-40"
          />
        </div>
        <RightSideNav />
        <VersionTimer />
      </div>
    </Layout>
  );
}
