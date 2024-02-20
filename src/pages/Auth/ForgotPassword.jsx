import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import toastStyle from '../../utilities/toastStyle';
import { useUser } from '../../contexts/UserContext';
import TransitionAnimation from '../../components/TransitionAnimation/TransitionAnimation';

const BASE_URL = import.meta.env.VITE_BASE_URL;
export default function Login() {
  const [email, setEmail] = useState('');
  const [displayForgotPassword, setDisplayForgotPassword] = useState(false);
  const { setUserEmail } = useUser();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please fill the email', toastStyle);
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/generateotp`,
        {
          email,
        },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        toast.success(res.data.message, toastStyle);
        setUserEmail(email);
        navigate('/resetPassword');
      }
    } catch (error) {
      toast.error(error.response.data.error, toastStyle);
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
        <FormContainer title="Password" prefixTitle="Forget">
          <form
            className="text-white p-10 md:p-20 flex flex-col form form__auth form__auth--forgetPass md:mt-6"
            onSubmit={handleSubmit}
          >
            <InputBox
              type="email"
              inputId="userEmail"
              onChange={setEmail}
              label="Email"
              value={email}
              isRequired
            />
            <div className="flex justify-end">
              <Button designType="primary" type="submit">
                Generate OTP
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
