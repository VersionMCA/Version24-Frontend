import React, { useEffect, useState } from 'react';

function formatWithZero(value) {
  return value < 10 ? `0${value}` : value;
}

function getTimeRemaining(endTime, currTime) {
  const total = Date.parse(endTime) - Date.parse(currTime);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    days: formatWithZero(days),
    hours: formatWithZero(hours),
    minutes: formatWithZero(minutes),
    seconds: formatWithZero(seconds),
  };
}

const versionDate = new Date('2024-03-22T00:00:00');

export default function LeftSideNav() {
  const [currTime, setCurrTime] = useState(new Date());

  const { days, hours, minutes, seconds } = getTimeRemaining(
    versionDate,
    currTime
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white text-center font-medium text-2xl md:text-4xl fixed bottom-20 md:left-10 left-20 text-opacity-30">
      <p>
        {days} : {hours} : {minutes} : {seconds}
      </p>
    </div>
  );
}
