import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ResetPassword() {
  const [displayResetPassword, setDisplayResetPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { resetToken } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error('Please fill all the fields', toastStyle);
      return;
    }

    if (password.length < 6) {
      toast.error('Password should be atleast 6 characters long', toastStyle);
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', toastStyle);
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/resetpassword`,
        {
          password,
          resetToken,
        },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        toast.success(res.data.message, toastStyle);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      // console.log(error);
      const msg = error.response.data.message || error.response.data.error;
      toast.error(msg, toastStyle);
    }
  };

  setTimeout(() => {
    setDisplayResetPassword(true);
  }, 500);

  return displayResetPassword ? (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Layout>
        <FormContainer title="Password" prefixTitle="Reset">
          <form
            className="text-white p-10 md:p-20 flex flex-col form form__auth md:mt-6 form__auth--resetPass"
            onSubmit={handleSubmit}
          >
            {/* <InputBox
              type="text"
              inputId="otp"
              onChange={setOtp}
              value={otp}
              label="OTP"
            /> */}

            <InputBox
              type="password"
              inputId="password"
              onChange={setPassword}
              value={password}
              label="Password"
            />
            <InputBox
              type="password"
              inputId="confirmPassword"
              onChange={setConfirmPassword}
              value={confirmPassword}
              label="Confirm Password"
            />

            <div className="flex justify-end mt-2">
              <Button designType="primary" type="submit">
                Submit
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
