/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import toastStyle from '../../utilities/toastStyle';
import Modal from '../Modal/Modal';
import FormContainer from '../../pages/Auth/FormContainer';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import UserAddedItem from './UserAddedItem';
import { useUser } from '../../contexts/UserContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function RegisterTeam({ eventName, toggle, visible }) {
  const { user, updateUserInfo } = useUser();

  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState();
  const [emailList, setEmailList] = useState([]);

  if (user && !emailList.includes(user.email)) setEmailList([user.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!teamName || emailList.length === 0) return;

    try {
      const res = await axios.post(
        `${BASE_URL}/registerevent`,
        {
          eventName,
          teamName,
          emails: emailList,
        },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        toast.success(
          res.data.message || 'Registered Successfully',
          toastStyle
        );

        setTimeout(() => {
          updateUserInfo(res.data.user);
        }, 2000);

        toggle();
      }
    } catch (error) {
      const msg = error.response.data.message || error.response.data.error;
      toast.error(msg, toastStyle);
    }
  };

  const handleAddUser = () => {
    setEmailList(() => [...emailList, email]);
    setEmail('');
  };

  const handleDeleteUser = (em) => {
    if (em === user.email) {
      toast.error('You cannot remove yourself', toastStyle);
      return;
    }
    setEmailList(() => emailList.filter((el) => el !== em));
  };

  return (
    <Modal visible={visible} toggle={toggle}>
      <div className="modal__content flex justify-center flex-col p-10">
        <FormContainer title="Registeration" prefixTitle="Team" isModal>
          <form
            className="text-white  flex flex-col form form__regTeam mt-6 md:mt-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputBox
              type="text"
              inputId="teamName"
              onChange={setTeamName}
              label="Team Name"
              value={teamName}
              isRequired
            />
            <div className="flex flex-col mb-7">
              <label htmlFor="email" className="uppercase mb-2 font-normal">
                Add Members (Email)*
              </label>
              <div className="flex w-80">
                <input
                  type="email"
                  id="userEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[rgba(52,152,219,0.25)] w-full outline-none text-white px-3 py-2 focus:ring-2 tracking-widest"
                />
                <Button
                  designType="secondary"
                  type="button"
                  onClick={handleAddUser}
                >
                  Add
                </Button>
              </div>
            </div>

            <ul className="flex flex-row mb-7 w-80 text-[.75rem] flex-wrap gap-2">
              {emailList.map((emailItem, index) => {
                return (
                  <UserAddedItem
                    email={emailItem}
                    key={index}
                    handleDeleteUser={handleDeleteUser}
                  />
                );
              })}
            </ul>

            <div className="flex mt-3 justify-center">
              <Button designType="primary" type="submit" onClick={handleSubmit}>
                Register
              </Button>
            </div>
          </form>
        </FormContainer>
      </div>
    </Modal>
  );
}
