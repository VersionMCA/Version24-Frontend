import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({
  designType,
  onClick,
  children,
  onKeyDown,
  isSubmitting,
}) {
  return (
    <div>
      <button
        className={`button button__${designType} uppercase`}
        type="submit"
        onClick={onClick}
        onKeyDown={onKeyDown}
        disabled={isSubmitting}
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
  onKeyDown: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
  onKeyDown: () => {},
};
