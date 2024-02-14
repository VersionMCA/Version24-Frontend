import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SideNav from '../../components/SideNav/SideNav';
import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="bg-black bg-opacity-75 h-lvh homeContainer">
      <div className="flex items-center justify-center h-lvh">
        <img
          src="../../../public/res/home_hero_img.png"
          alt="Hero Element"
          className="md:h-72 h-40"
        />
      </div>
      <Navbar />
      <SideNav />
      <Footer />
    </div>
  );
}
