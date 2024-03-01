import React from 'react';
import './BlankPageNote.scss';

function BlankPageNote({ heading1, heading2, para }) {
  return (
    <div className="h-lvh w-full text-white items-center flex justify-center blankPage">
      <div className="flex flex-col  max-w-max text-center w-[80%]">
        <h1 className="text-xl md:text-3xl mb-2 md:mb-10 tracking-widest">
          <span className="text-primary tracking-widest">{heading1}</span>{' '}
          {heading2}
        </h1>
        <p className="tracking-widest">{para}</p>
      </div>
    </div>
  );
}

export default BlankPageNote;
