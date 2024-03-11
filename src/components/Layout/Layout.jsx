import React from 'react';
import PropTypes from 'prop-types'; // Add this import statement
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout({ children, noBgBlack, noFooter }) {
  return (
    <div className="!overflow-y-hidden">
      <Navbar noBgBlack={noBgBlack} />
      <main>{children}</main>
      <ToastContainer limit={1} autoClose={2000} />
      {!noFooter && <Footer />}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
