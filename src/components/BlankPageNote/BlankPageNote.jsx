import React from 'react';

function BlankPageNote({ heading1, heading2, para }) {
  return (
    <div className="bg-black h-lvh w-full text-white items-center flex justify-center">
      <div className="flex flex-col  max-w-max text-center">
        <h1 className="text-4xl mb-10 tracking-widest">
          <span className="text-primary tracking-widest">{heading1}</span>{' '}
          {heading2}
        </h1>
        <p className="tracking-widest">{para}</p>
      </div>
    </div>
  );
}

export default BlankPageNote;
