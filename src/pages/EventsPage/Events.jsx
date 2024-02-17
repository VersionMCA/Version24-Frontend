import React, { useEffect } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import EventThumbnail from '../../components/EventThumbnail/EventThumbnail';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import eventList from './EventList';
import arrowSvg from '../../assets/carouselArrow.svg';

function Events() {
  const [newItemActive, setNewItemActive] = React.useState(0);
  const [firstThumbnailIndex, setFirstThumbnailIndex] = React.useState(0);

  useEffect(() => {
    const showSlider = (nextItem) => {
      const items = document.querySelectorAll(
        `.event__slider .allEvents .eventCard__item`
      );
      const thumbnails = document.querySelectorAll(
        `.thumbnail .thumbnail__item`
      );

      const itemActiveOld = document.querySelector(
        `.event__slider .allEvents .eventCard__item.active`
      );

      const thumbnailActiveOld = document.querySelector(
        `.thumbnail .thumbnail__item.active`
      );

      // remove active class from old active item
      if (itemActiveOld !== null) itemActiveOld.classList.remove(`active`);
      if (thumbnailActiveOld !== null)
        thumbnailActiveOld.classList.remove(`active`);

      // add active class to new active item
      items[nextItem].classList.add(`active`);
      thumbnails[nextItem].classList.add(`active`);

      const virtualIndex =
        (newItemActive - firstThumbnailIndex + thumbnails.length) %
        thumbnails.length;

      if (virtualIndex === thumbnails.length - 1) {
        const thumbnailParent = document.querySelector(`.thumbnail`);
        thumbnailParent.appendChild(thumbnailParent.firstChild);

        setFirstThumbnailIndex((firstThumbnailIndex + 1) % thumbnails.length);
      }
    };
    showSlider(newItemActive);
  }, [firstThumbnailIndex, newItemActive]);

  return (
    <div>
      <Navbar />
      <div className="event__slider font-secondary">
        <div className="allEvents">
          {eventList.map((event) => {
            return (
              <EventCard
                key={event.id}
                id={event.id}
                content={event.content}
                imgLink={event.imgLink}
                name={event.name}
                date={event.date}
              />
            );
          })}
        </div>
        <div className="thumbnail">
          <div className="arrowContainer left">
            <img src={arrowSvg} alt="leftArrow" />
          </div>
          {eventList.map((event) => {
            return (
              <EventThumbnail
                setNewItemActive={setNewItemActive}
                key={event.id}
                id={event.id - 1}
                imgLink={event.imgLink}
                name={event.name}
              />
            );
          })}
          <div className="arrowContainer left">
            <img src={arrowSvg} alt="leftArrow" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
