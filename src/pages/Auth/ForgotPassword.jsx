import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import toastStyle from '../../utilities/toastStyle';
import TransitionAnimation from '../../components/TransitionAnimation/TransitionAnimation';
import './Auth.scss';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal/Modal';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function Login() {
  const [email, setEmail] = useState('');
  const [displayForgotPassword, setDisplayForgotPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toggle, visible] = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error('Please enter a valid email', toastStyle);
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        `${BASE_URL}/forgetpassword`,
        {
          email,
        },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        toggle();
        setEmail('');
      }
    } catch (error) {
      const msg = error.response.data.message || error.response.data.error;
      toast.error(msg, toastStyle);
    } finally {
      setIsSubmitting(false);
    }
  };

  setTimeout(() => {
    setDisplayForgotPassword(true);
  }, 500);

  return displayForgotPassword ? (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <Modal visible={visible} toggle={toggle} isAlert>
          <div className="modal__content flex justify-center flex-col p-4 md:p-6 mr-4 md:mr-10">
            <p className="text-base md:text-lg text-primary">
              We&apos;ve sent you mail. Please check it for the instructions.
              {/* <span className="text-primary">{` ${teamMember.designation}`}</span> */}
            </p>
          </div>
        </Modal>
        <FormContainer title="Password" prefixTitle="Forget">
          <form
            className="text-offWhite p-10 md:p-20 flex flex-col form form__auth form__auth--forgetPass md:mt-6"
            onSubmit={handleSubmit}
          >
            <InputBox
              type="text"
              inputId="userEmail"
              onChange={setEmail}
              label="Email"
              value={email}
              isRequired
            />
            <div className="flex justify-end">
              <Button
                designType="primary"
                type="submit"
                isSubmitting={isSubmitting}
              >
                Reset
              </Button>
            </div>
          </form>
        </FormContainer>
      </Layout>
    </motion.div>
  ) : (
    <TransitionAnimation />
  );
}
