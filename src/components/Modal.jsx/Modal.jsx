import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import './Modal.scss';
import Button from '../Button/Button';

function Modal({ visible, toggle, children }) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling on the background
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling on the background
    }
  });

  const modalJsx = (
    <div className="modal">
      <div
        className="modal__body bg-neutral-950 text-white"
        role="dialog"
        aria-modal="true"
      >
        {children}
        <div className="close absolute top-4 right-4 cursor-pointer">
          <Button designType="icon" onClick={toggle}>
            <img
              src="../../../public/res/close.svg"
              alt="close"
              className="h-4 hover:scale-125 transition-all"
            />
          </Button>
        </div>
      </div>
    </div>
  );

  return visible ? ReactDOM.createPortal(modalJsx, document.body) : null;
}

export default Modal;
