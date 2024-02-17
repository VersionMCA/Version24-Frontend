import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({ designType, onClick, children }) {
  return (
    <div>
      <button
        className={`px-8 py-2 button button__${designType}`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  designType: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
};
