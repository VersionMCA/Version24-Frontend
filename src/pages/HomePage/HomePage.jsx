import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SideNav from '../../components/SideNav/SideNav';

export default function HomePage() {
  return (
    <div className="bg-black bg-opacity-75 h-lvh">
      <Navbar />
      <SideNav />
      <Footer />
    </div>
  );
}
