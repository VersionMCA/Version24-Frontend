/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div className="bg-login-bg bg-left bg-no-repeat bg-contain bg-black h-screen relative">
      <div className=" flex flex-col items-center justify-center h-full lg:absolute lg:left-3/4 lg:translate-x-[-100%]">
        <h1 className="text-white text-xl font-bold tracking-[10px] mb-[20px]">
          VERSION <span className="text-primary">LOGIN</span>
        </h1>
        <form
          action="POST"
          className="text-white text-sm font-secondary border-2 border-primary lg:p-12 p-6 flex flex-col"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="email" className="h-[33px]">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[rgba(52,152,219,0.25)] w-[301px] h-[33px]"
          />
          <label htmlFor="password" className="h-[33px] mt-[5px]">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[rgba(52,152,219,0.25)] w-[301px] h-[33px]"
          />
          <div className="flex justify-between mt-3 items-center">
            <Link to="/forgotPassword">Forgot Password?</Link>
            <span className="border-2 border-primary">
              <button className="border-2 border-primary p-2" type="submit">
                LOGIN
              </button>
            </span>
          </div>
          <p className="text-center mt-8 text-xs">
            Don't have account?
            <Link className="text-primary cursor-pointer" to="/register">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
