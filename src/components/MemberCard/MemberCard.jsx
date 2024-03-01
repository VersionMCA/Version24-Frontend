/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import './MemberCard.scss';

// eslint-disable-next-line react/prop-types
export default function MemberCard({ teamMember, teamId }) {
  const [toggle, visible] = useModal();

  const showModal = () => {
    toggle();
  };

  return (
    <div
      className={`relative bg-transparent flex flex-col flex-wrap items-center justify-around ${teamMember.designation ? 'h-96' : 'h-[23rem]'} m-auto memberCard`}
    >
      <div className="absolute top-0 left-0 h-16 w-16 border-l-[5px] border-t-[5px] border-primary">
        {}
      </div>
      <div className="relative group overflow-hidden transition-opacity duration-300">
        <div className="flex flex-row justify-center items-center memberCard__img__overlay m-6">
          {teamMember.github && (
            <a
              className="absolute z-10 top-24 text-primary hover:scale-110 transition-all"
              href={teamMember.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          )}
          {teamMember.linkedin && (
            <a
              className="absolute top-32 z-10 text-primary hover:scale-110 transition-all"
              href={teamMember.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          )}

          {teamId === '1010' && (
            <button
              className="absolute top-32 z-10 text-xs font-semibold text-primary hover:scale-110 transition-all"
              onClick={showModal}
            >
              Message from {teamMember.designation}
            </button>
          )}
        </div>
        <LazyLoadImage
          src={`/member/${teamMember.image}`}
          alt="person"
          className="h-72 w-60 object-cover p-6 transition-opacity memberCard__img"
        />
      </div>
      <h4 className="text-primary text-sm mt-[-40px]">{teamMember.name}</h4>
      <h4 className="text-offWhite text-sm pb-4 mt-[-30px]">
        {teamMember.designation}
      </h4>
      <div className="absolute bottom-0 right-0 h-16 w-16 border-b-[5px] border-r-[5px] border-primary">
        {}
      </div>
      {teamId === '1010' && (
        <Modal visible={visible} toggle={toggle} restrictWidth notCenter>
          <div className="modal__content flex justify-center flex-col p-8 md:p-16">
            <h2 className="text-xl font-semibold mb-10">
              Message From
              <span className="text-primary">{` ${teamMember.designation}`}</span>
            </h2>
            <p className="font-secondary text-sm font-light md:text-justify hyphens-auto">
              {teamMember.message}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
}
