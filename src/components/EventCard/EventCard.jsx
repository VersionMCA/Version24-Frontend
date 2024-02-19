import React from 'react';
import './EventCard.scss';
import Button from '../Button/Button';

function EventCard({ name, date, content, imgLink }) {
  return (
    <div className="eventCard__item">
      <img src={imgLink} alt={name} />
      <div className="content">
        <p className="font-primary">{date}</p>
        <h2 className="font-primary">{name}</h2>
        <div className="btn-container">
          <Button designType="tertiary" className="btn-register">
            <span>Register</span>
            <i />
          </Button>
        </div>
        <p className=" font-extralight">{content}</p>
      </div>
    </div>
  );
}

export default EventCard;
