import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import toastStyle from '../../utilities/toastStyle';
import { useUser } from '../../contexts/UserContext';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ResetPassword() {
  const [otp, setOtp] = useState(undefined);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { userEmail } = useUser();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp || !password || !confirmPassword) {
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
          email: userEmail,
          otp,
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
      toast.error(error.response.data.error, toastStyle);
    }
  };

  return (
    <Layout>
      <FormContainer title="Password" prefixTitle="Forget">
        <form
          className="text-white p-10 md:p-20 flex flex-col form form__auth md:mt-6 form__auth--resetPass"
          onSubmit={handleSubmit}
        >
          <InputBox
            type="text"
            inputId="otp"
            onChange={setOtp}
            value={otp}
            label="OTP"
          />

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
              Reset Password
            </Button>
          </div>
        </form>
      </FormContainer>
    </Layout>
  );
}
