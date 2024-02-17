import React from 'react';
import './EventThumbnail.scss';

function EventThumbnail({ id, imgLink, name, setNewItemActive }) {
  return (
    <div
      className="thumbnail__item"
      onClick={() => setNewItemActive(id)}
      aria-hidden="true"
    >
      <img src={imgLink} alt={name} />
      <div className="content">{name}</div>
    </div>
  );
}

export default EventThumbnail;
