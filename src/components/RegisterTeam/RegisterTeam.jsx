/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import FormContainer from '../../pages/Auth/FormContainer';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import UserAddedItem from './UserAddedItem';

export default function RegisterTeam() {
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');

  const [emailList, setEmailList] = useState([]);

  const [toggle, visible] = useModal();

  const handleSubmit = async () => {};

  const handleAddUser = () => {
    setEmailList(() => [...emailList, email]);
    setEmail('');
  };

  const handleDeleteUser = (id) => {
    setEmailList(() => emailList.filter((_, index) => index !== id));
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
              <label htmlFor="email" className="uppercase mb-2 font-medium">
                Add Email
              </label>
              <div className="flex  w-80">
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

            <ul className="flex flex-row mb-7 w-80 text-[10px] flex-wrap gap-2">
              {emailList.map((emailItem, index) => {
                return (
                  <UserAddedItem
                    email={emailItem}
                    key={index}
                    id={index}
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
