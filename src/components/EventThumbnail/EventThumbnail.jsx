import React from 'react';
import './EventThumbnail.scss';

function EventThumbnail({ id, imgLink, name, setNewItemActive }) {
  const thumbnailClass = `thumbnail__item ${id === 0 ? 'active' : ''}`;
  return (
    <div
      className={thumbnailClass}
      onClick={() => setNewItemActive(id)}
      aria-hidden="true"
    >
      <img src={imgLink} alt={name} />
      <div className="content">{name}</div>
    </div>
  );
}

export default EventThumbnail;
