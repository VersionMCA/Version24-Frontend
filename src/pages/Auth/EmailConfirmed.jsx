import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout/Layout';
import toastStyle from '../../utilities/toastStyle';
import BlankPageNote from '../../components/BlankPageNote/BlankPageNote';
import TransitionAnimation from '../../components/TransitionAnimation/TransitionAnimation';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function EmailConfirmed() {
  const { emailConfirmToken } = useParams();

  const [displayMsg, setDisplayMsg] = useState(false);

  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const res = await axios.post(
          `${BASE_URL}/confirmemail`,
          {
            emailConfirmToken,
          },
          { withCredentials: true }
        );
        if (res.data?.status === 'success') {
          setIsEmailConfirmed(true);
        }
      } catch (error) {
        // console.log(error);
        const msg = error.response.data.message || error.response.data.error;
        toast.error(msg, toastStyle);
      }
    };

    confirmEmail();
  });

  setTimeout(() => {
    setDisplayMsg(true);
  }, 3000);

  return (
    <Layout>
      {isEmailConfirmed && (
        <BlankPageNote
          heading1="Congratulations!!"
          heading2="Your account is active now."
          para="Your email has been confirmed. You can now login."
        />
      )}

      {displayMsg ? (
        <BlankPageNote
          heading2="Something went wrong!!"
          para="Please try again later."
        />
      ) : (
        <TransitionAnimation />
      )}
    </Layout>
  );
}

export default EmailConfirmed;
