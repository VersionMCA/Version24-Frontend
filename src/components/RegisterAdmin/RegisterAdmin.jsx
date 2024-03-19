/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toastStyle from '../../utilities/toastStyle';
import Modal from '../Modal/Modal';
import FormContainer from '../../pages/Auth/FormContainer';
import InputBox from '../InputBox/InputBox';
import Button from '../Button/Button';
import UserAddedItem from '../RegisterTeam/UserAddedItem';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function RegisterAdmin({
  eventName,
  toggle,
  visible,
  teamSize,
}) {
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState();
  const [emailList, setEmailList] = useState([]);
  const [isAddingUser, setIsAddingUser] = useState(false);

  const queryClient = useQueryClient();
  const registerMutationFn = async () => {
    const res = await axios.post(
      `${BASE_URL}/admin/eventRegistration`,
      { eventName, teamName, emails: emailList },
      {
        withCredentials: true,
      }
    );

    return res.data;
  };

  const registerMutation = useMutation({
    mutationFn: registerMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [eventName],
      });
      queryClient.invalidateQueries({ queryKey: ['usersDataKey'] });
    },
  });

  const handleSubmit = async () => {
    if (!teamName && teamSize[teamSize.length - 1] > 1) {
      toast.error('Please fill the Team Name', toastStyle);
      return;
    }

    if (!teamSize.includes(emailList.length)) {
      toast.error(
        `${
          teamSize.length === 1
            ? `This event needs exactly ${teamSize[0]} members.`
            : `This event needs ${teamSize[0]} to ${teamSize[teamSize.length - 1]} members.`
        }`,
        toastStyle
      );
      return;
    }

    await registerMutation.mutateAsync();

    setEmailList([]);
    setTeamName('');
  };

  const handleAddUser = async () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error('Please enter a valid email', toastStyle);
      return;
    }

    if (emailList.includes(email)) {
      toast.error('User already added', toastStyle);
      return;
    }

    if (emailList.length >= teamSize[teamSize.length - 1]) {
      toast.error(
        `This Event can have atmost ${teamSize[teamSize.length - 1]} members.`,
        toastStyle
      );
      return;
    }

    try {
      setIsAddingUser(true);
      const res = await axios.post(
        `${BASE_URL}/checkuser`,
        {
          email,
        },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        setEmailList(() => [...emailList, email]);
        setEmail('');
      }
    } catch (error) {
      toast.error(error.response.data.message, toastStyle);
    } finally {
      setIsAddingUser(false);
    }
  };

  const handleDeleteUser = (em) => {
    setEmailList(() => emailList.filter((el) => el !== em));
  };

  useEffect(() => {
    if (registerMutation.isError) {
      const msg =
        registerMutation?.error?.response?.data?.message ||
        registerMutation?.error?.message;

      toast.error(msg, toastStyle);
    }
  }, [registerMutation]);

  return (
    <Modal visible={visible} toggle={toggle}>
      <div className="modal__content flex justify-center flex-col p-10">
        <FormContainer title="Registration" prefixTitle="" isModal>
          <form
            className="text-offWhite  flex flex-col form form__regTeam mt-6 md:mt-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {teamSize[teamSize.length - 1] > 1 && (
              <InputBox
                type="text"
                inputId="teamName"
                onChange={setTeamName}
                label="Team Name"
                value={teamName}
                isRequired
              />
            )}

            <div className="flex flex-col mb-7">
              <label htmlFor="email" className="uppercase mb-2 font-normal">
                Add Members (Email)*
              </label>
              <div className="flex w-80">
                <input
                  type="text"
                  id="userEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[rgba(52,152,219,0.25)] w-full outline-none text-offWhite px-3 py-2 focus:ring-2 tracking-widest"
                />
                <Button
                  designType="secondary"
                  type="button"
                  onClick={handleAddUser}
                  isSubmitting={isAddingUser}
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
              <Button
                designType="primary"
                type="submit"
                onClick={handleSubmit}
                isSubmitting={registerMutation.isPending}
              >
                Register
              </Button>
            </div>
          </form>
        </FormContainer>
      </div>
    </Modal>
  );
}
