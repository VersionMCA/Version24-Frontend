import React, { useRef, useState } from 'react';
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

  const otpRef = useRef();

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.error('Please fill the OTP', toastStyle);
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}/verifyotp`,
        {
          otp,
          email: userEmail,
        },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        toast.success(res.data.status, toastStyle);
        otpRef.current.disabled = true;
      }
    } catch (error) {
      // console.log(error);
      if (error.response?.status === 401) {
        toast.error('Invalid OTP', toastStyle);
      } else toast.error('Something went wrong', toastStyle);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otpRef.current.disabled === false) {
      toast.error('Please verify the OTP', toastStyle);
      return;
    }

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
        `${BASE_URL}/resetPassword`,
        {
          password,
        },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        toast.success(res.data.status, toastStyle);
        navigate('/resetPassword');
      }
    } catch (error) {
      toast.error('Something went wrong', toastStyle);
    }
  };

  return (
    <Layout>
      <FormContainer title="Password" prefixTitle="Forget">
        <form
          className="text-white p-10 md:p-20 flex flex-col form form__auth md:mt-6 form__auth--resetPass"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col mb-7">
            <label htmlFor="email" className="uppercase mb-2 font-normal">
              OTP*
            </label>
            <div className="flex w-80">
              <input
                type="otp"
                id="otp"
                ref={otpRef}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-[rgba(52,152,219,0.25)] w-full outline-none text-white px-3 py-2 focus:ring-2 tracking-widest"
              />
              <Button
                designType="secondary"
                type="button"
                onClick={handleVerifyOtp}
              >
                <span className="text-sm font-semibold">Verify</span>
              </Button>
            </div>
          </div>

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
