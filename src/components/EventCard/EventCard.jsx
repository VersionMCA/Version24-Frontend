import React from 'react';
import axios from 'axios';
import './EventCard.scss';
import { toast } from 'react-toastify';
import Button from '../Button/Button';
import RegisterTeam from '../RegisterTeam/RegisterTeam';
import useModal from '../../hooks/useModal';
import { useUser } from '../../contexts/UserContext';
import toastStyle from '../../utilities/toastStyle';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function EventCard({ name, teamSize, date, content, imgLink }) {
  const [toggle, visible] = useModal();

  const { user, updateUserInfo } = useUser();

  const registerForEvent = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/registerevent`,
        {
          eventName: name,
          emails: [user.email],
        },
        { withCredentials: true }
      );

      if (res.data?.status === 'success') {
        toast.success(res.data.message, toastStyle);
        updateUserInfo(res.data.user);
      }
    } catch (error) {
      const msg = error.response.data.message || error.response.data.error;
      toast.error(msg, toastStyle);
    }
  };

  const isItTeamEvent = () => {
    if (!user) {
      toast.error('Please login to register', toastStyle);
      return;
    }

    if (teamSize > 1) {
      toggle();
      return;
    }

    registerForEvent();
  };

  const registeredEventList = user?.event?.map((event) => event.eventName);

  const newContent = content.split('\n').map((str, i) => <p key={i}>{str}</p>);
  return (
    <div className="eventCard__item">
      <img src={imgLink} alt={name} />
      <div className="content">
        <p className="font-primary content__date">{date}</p>
        <h2 className="font-primary content__name">{name}</h2>
        <div className="[&>*]:font-extralight [&>*]:font-xs [&>*]:tracking-normal content__info">
          {newContent}
        </div>
        <RegisterTeam toggle={toggle} visible={visible} eventName={name} />
        <div className="btn-container font-primary font-light mt-4 md:mt-8">
          {registeredEventList?.includes(name) ? (
            <span className="text-primary font-semibold">Registered</span>
          ) : (
            <Button
              designType="tertiary"
              className="btn-register"
              onClick={isItTeamEvent}
            >
              <span>Register</span>
              <i />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
