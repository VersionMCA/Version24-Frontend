/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';

import './Auth.scss';
import FormContainer from './FormContainer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // console.log(__URL__);
  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    axios
      .post(`${__URL__}/login`, { ...data }, { withCredentials: true })
      .then((response) => {
        if (response.data?.status === 'success') {
          alert(response.data?.message);
          navigate('/');
        }
      })
      .catch((err) => {
        alert('Password too small, must contain atleast 8 characters.');
      });
  }

  return (
    <Layout>
      <FormContainer title="Login">
        <form
          className="text-white text-sm font-secondar lg:p-16  p-10 flex flex-col form form__login font-secondary"
          onSubmit={(e) => handleSubmit(e)}
        >
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
            <Button designType="primary" type="submit">
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
