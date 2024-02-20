/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import PropTypes from 'prop-types';

function UserAddedItem({ email, handleDeleteUser }) {
  return (
    <li className="flex flex-row border-2 border-primary border-solid p-2 rounded-md items-center">
      <span>{email.split('@')[0]}</span>
      <span
        className="ml-2 cursor-pointer"
        onClick={() => handleDeleteUser(email)}
        role="button"
      >
        <img
          src="../../../public/res/close.svg"
          alt="close"
          className="h-3 hover:scale-110 transition-all"
        />
      </span>
    </li>
  );
}

UserAddedItem.propTypes = {
  email: PropTypes.string.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
};

export default UserAddedItem;
