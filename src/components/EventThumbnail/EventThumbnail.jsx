import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './EventThumbnail.scss';

function EventThumbnail({ id, imgLink, name, setNewItemActive }) {
  const thumbnailClass = `thumbnail__item ${id === 0 ? 'active' : ''}`;
  return (
    <div
      className={thumbnailClass}
      onClick={() => setNewItemActive(id)}
      aria-hidden="true"
    >
      <LazyLoadImage src={imgLink} alt={name} />
      <div className="content">{name}</div>
    </div>
  );
}

export default EventThumbnail;
