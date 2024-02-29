/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';

import './Auth.scss';
import FormContainer from './FormContainer';
import toastStyle from '../../utilities/toastStyle';
import { useUser } from '../../contexts/UserContext';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { updateUserInfo } = useUser();
  const [toggle, visible] = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill all the fields', toastStyle);
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email', toastStyle);
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
        { ...data },
        { withCredentials: true }
      );

      if (res.data?.status === 'success') {
        toast.success(res.data.message, toastStyle);
        updateUserInfo(res.data.user);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else if (res.data?.status === 'error') {
        if (res.data?.tag === 'emailNotConfirmed') {
          toggle();
        }
      }
    } catch (error) {
      if (error.response.data?.tag === 'emailNotConfirmed') {
        toggle();
      } else {
        const msg = error.response.data.message || error.response.data.error;
        toast.error(msg, toastStyle);
      }
    }
  };

  return (
    <Layout>
      {/* <p className=" text-white text-center fixed xl:bottom-1/2 xl:left-1/4  bottom-20 left-0 border-2 border-red-700 p-2 md:p-5">
          ! Registerations are not open for now.
        </p> */}
      <Modal visible={visible} toggle={toggle} isAlert>
        <div className="modal__content flex justify-center flex-col p-4 md:p-6 mr-4 md:mr-10">
          <p className="text-base md:text-lg text-primary">
            We&apos;ve sent you mail. Please verify your email to continue.
            {/* <span className="text-primary">{` ${teamMember.designation}`}</span> */}
          </p>
        </div>
      </Modal>
      <FormContainer title="Login" prefixTitle="Version">
        <form
          className="text-white p-10 md:p-20 flex flex-col form form__auth form__auth--login md:mt-3"
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
          <InputBox
            type="password"
            inputId="password"
            onChange={setPassword}
            value={password}
            label="Password"
            isRequired
          />

          <div className="flex justify-between mt-3 items-center">
            <Link
              to="/forgotPassword"
              className=" pb-[2px] transition-all border-b-2 border-transparent hover:border-b-2 hover:border-primary"
            >
              Forgot Password?
            </Link>
            <Button designType="primary" type="submit">
              LOGIN
            </Button>
          </div>
          <p className="text-center mt-6 text-sm">
            Don&apos;t have account?
            <Link
              className="ml-1 text-primary cursor-pointer uppercase hover:font-semibold transition-all"
              to="/register"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </FormContainer>
    </Layout>
  );
}

export default Login;
