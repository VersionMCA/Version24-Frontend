import React from 'react';

function LeftSideNav() {
  return (
    <div className="h-60 flex-col fixed top-1/3 text-white items-center ml-6 hidden md:flex">
      <span className="h-28 w-[1px] bg-white flex" />
      <p className="my-2 font-medium">22/03</p>
      <span className="h-28 w-[1px] bg-white flex" />
    </div>
  );
}

export default LeftSideNav;
