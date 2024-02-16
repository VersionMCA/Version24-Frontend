/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState(undefined);
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${__URL__}/generateotp`, { email }, { withCredentials: true })
      .then((res) => {
        alert('OTP sent! Kindly check your email');
        setToggle(false);
      })
      .catch((err) => {
        alert('Server error');
      });
  }

  function handleOTPSubmit(e) {
    e.preventDefault();
    axios
      .post(`${__URL__}/resetpassword`, {
        email,
        otp,
        password,
      })
      .then((res) => {
        alert(res.data.message);
        setEmail('');
        setPassword('');
        setOtp('');
        navigate('/login');
      })
      .catch((err) => alert(err.res.data.message));
  }

  return (
    <div className="bg-login-bg bg-left bg-no-repeat bg-contain bg-black h-screen relative">
      <div className=" flex flex-col items-center justify-center h-full lg:absolute lg:left-3/4 lg:translate-x-[-100%]">
        <h1 className="text-white text-xl font-bold tracking-[10px] mb-[20px]">
          FORGOT <span className="text-primary">PASSWORD</span>
        </h1>
        {toggle ? (
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
            <button className="mt-8 border-2 border-primary p-2" type="submit">
              GENERATE OTP
            </button>
          </form>
        ) : (
          <form
            action="POST"
            onSubmit={(e) => handleOTPSubmit(e)}
            className="text-white text-sm font-secondary border-2 border-primary lg:p-12 p-6 flex flex-col"
          >
            <label htmlFor="otp" className="h-[33px]">
              OTP
            </label>
            <input
              type="number"
              id="otp"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
            <button className="mt-8 border-2 border-primary p-2" type="submit">
              RESET PASSWORD
            </button>
          </form>
        )}

        <div className="flex justify-between mt-3 items-center">
          <Link to="/forgotPassword">Forgot Password?</Link>
          {/* <span className="border-2 border-primary">
            
          </span> */}
        </div>
        {/* <p className="text-center mt-8 text-xs">
          Don't have account?
          <Link className="text-primary cursor-pointer" to="/register">
            Sign Up
          </Link>
        </p> */}
      </div>
    </div>
  );
}
