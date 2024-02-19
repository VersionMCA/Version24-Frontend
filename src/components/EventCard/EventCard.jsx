import React from 'react';
import './EventCard.scss';
import Button from '../Button/Button';
import RegisterTeam from '../RegisterTeam/RegisterTeam';
import useModal from '../../hooks/useModal';

function EventCard({ name, date, content, imgLink }) {
  const [toggle, visible] = useModal();

  const newContent = content.split('\n').map((str, i) => <p key={i}>{str}</p>);
  return (
    <div className="eventCard__item">
      <img src={imgLink} alt={name} />
      <div className="content">
        <p className="font-primary content__date">{date}</p>
        <h2 className="font-primary">{name}</h2>
        <div className="[&>*]:font-extralight [&>*]:font-xs [&>*]:tracking-normal">
          {newContent}
        </div>
        <RegisterTeam toggle={toggle} visible={visible} />
        <div className="btn-container font-primary font-light mt-10">
          <Button
            designType="tertiary"
            className="btn-register"
            onClick={toggle}
          >
            <span>Register</span>
            <i />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
