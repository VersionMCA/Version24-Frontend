/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
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

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      toast.error('Please fill all the fields', toastStyle);
      return;
    }

    const data = {
      email,
      password,
    };

    try {
      const res = await axios.post(
        `${__URL__}/login`,
        { ...data },
        { withCredentials: true }
      );
      if (res.data?.status === 'success') {
        toast.success(res.data.status, toastStyle);
        navigate('/');
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error('Invalid credentials', toastStyle);
      } else {
        toast.error('Something went wrong', toastStyle);
      }
    }
  };

  return (
    <Layout>
      <FormContainer title="Login">
        <form className="text-white p-10 md:p-20 flex flex-col form form__auth md:mt-6">
          <InputBox
            type="email"
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
            <Button designType="primary" type="submit" onClick={handleSubmit}>
              LOGIN
            </Button>
          </div>
          <p className="text-center mt-6 text-sm">
            Don't have account?
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
