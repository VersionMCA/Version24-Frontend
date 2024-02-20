/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../../components/EventCard/EventCard';
import EventThumbnail from '../../components/EventThumbnail/EventThumbnail';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import eventList from './EventList';
import './EventsPage.scss';
import arrowSvg from '../../assets/carouselArrow.svg';
import TransitionAnimation from '../../components/TransitionAnimation/TransitionAnimation';

function Events() {
  const [displayEvents, setDisplayEvents] = useState(false);
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

      const virtualIndex =
        (newItemActive - firstThumbnailIndex + thumbnails.length) %
        thumbnails.length;
      // remove active class from old active item
      if (itemActiveOld !== null) itemActiveOld.classList.remove(`active`);
      if (thumbnailActiveOld !== null)
        thumbnailActiveOld.classList.remove(`active`);

      // add active class to new active item
      items[nextItem].classList.add(`active`);
      thumbnails[virtualIndex].classList.add(`active`);

      if (virtualIndex === thumbnails.length - 1) {
        const thumbnailParent = document.querySelector(`.thumbnail`);
        thumbnailParent.appendChild(thumbnailParent.firstChild);

        setFirstThumbnailIndex((firstThumbnailIndex + 1) % thumbnails.length);
      } else if (virtualIndex === 0 && itemActiveOld !== null) {
        const thumbnailParent = document.querySelector(`.thumbnail`);
        thumbnailParent.prepend(thumbnailParent.lastChild);

        setFirstThumbnailIndex(
          (firstThumbnailIndex - 1 + thumbnails.length) % thumbnails.length
        );
      }
    };

    if (displayEvents) showSlider(newItemActive);
  }, [firstThumbnailIndex, newItemActive, displayEvents]);

  function moveLeft() {
    setNewItemActive(firstThumbnailIndex);
  }

  function moveRight() {
    setNewItemActive(
      (firstThumbnailIndex + eventList.length - 1) % eventList.length
    );
  }

  setTimeout(() => {
    setDisplayEvents(true);
  }, 1000);

  return displayEvents ? (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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
          <div className="thumbnailContainer">
            <div
              className="arrowContainer left"
              aria-hidden="true"
              onClick={moveLeft}
            >
              <img src={arrowSvg} alt="leftArrow" className="h-12" />
            </div>
            <div className="thumbnail">
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
            </div>
            <div
              className="arrowContainer right"
              aria-hidden="true"
              onClick={moveRight}
            >
              <img src={arrowSvg} alt="rightArrow" className="h-12" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </motion.div>
  ) : (
    <TransitionAnimation />
  );
}

export default Events;
