import React from 'react';
import PropTypes from 'prop-types';

export default function InputBox({
  type,
  inputId,
  value,
  label,
  onChange,
  note,
}) {
  return (
    <div className="flex flex-col mb-7">
      <label htmlFor="email" className="uppercase mb-2 font-normal">
        {label}*
      </label>
      <input
        type={type}
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-[rgba(52,152,219,0.25)] w-80 outline-none text-offWhite px-3 py-2 focus:ring-2 tracking-widest"
      />
      {note ? (
        <p className="w-80 mt-2 text-xs text-offWhite text-opacity-65">
          {note}
        </p>
      ) : null}
    </div>
  );
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  note: PropTypes.string,
};

InputBox.defaultProps = {
  note: '',
};
