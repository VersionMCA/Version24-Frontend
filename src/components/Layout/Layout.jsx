import React from 'react';
import PropTypes from 'prop-types'; // Add this import statement
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar bgWhite={false} />
      <main>{children}</main> 
      <ToastContainer />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
