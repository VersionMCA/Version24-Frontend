/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './TransitionAnimation.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function TransitionAnimation() {
  return (
    <div
      id="transition-animation-container"
      className="font-primary text-secondary bg-black"
    >
      <Navbar />
      <div className="preloader" translate="no">
        <div className="preloader__ring">
          <div className="preloader__sector">V</div>
          <div className="preloader__sector">e</div>
          <div className="preloader__sector">r</div>
          <div className="preloader__sector">s</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">o</div>
          <div className="preloader__sector">n</div>
          <div className="preloader__sector">'</div>
          <div className="preloader__sector">2</div>
          <div className="preloader__sector">4</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
        </div>
        <div className="preloader__ring">
          <div className="preloader__sector">V</div>
          <div className="preloader__sector">e</div>
          <div className="preloader__sector">r</div>
          <div className="preloader__sector">s</div>
          <div className="preloader__sector">i</div>
          <div className="preloader__sector">o</div>
          <div className="preloader__sector">n</div>
          <div className="preloader__sector">'</div>
          <div className="preloader__sector">2</div>
          <div className="preloader__sector">4</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector">.</div>
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
          <div className="preloader__sector" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
