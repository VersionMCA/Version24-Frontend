import React from 'react';
import './EventCard.scss';

function EventCard({ name, date, content, imgLink }) {
  return (
    <div className="eventCard__item">
      <img src={imgLink} alt={name} />
      <div className="content">
        <p className="font-primary">{date}</p>
        <h2 className="font-primary">{name}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default EventCard;
