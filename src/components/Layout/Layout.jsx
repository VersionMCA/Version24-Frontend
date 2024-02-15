import React from 'react';
import PropTypes from 'prop-types'; // Add this import statement

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
