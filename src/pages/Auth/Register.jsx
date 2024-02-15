/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [college, setCollege] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const navigate = useNavigate();
  //   console.log(username, email, password);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneNumber.toString().length !== 10) {
      alert('Not a valid Phone Number');
      return;
    }
    axios
      .post(`${__URL__}/signup`, {
        name: username,
        email,
        university: college,
        password,
        rollNumber,
        mobile: phoneNumber,
      })
      .then((response) => {
        if (response.data?.status === 'success') alert(response.data.message);
        navigate('/login');
      })
      .catch(() => {
        // console.log(error);
        alert('Your password is too short, must contain atleast 8 characters.');
      });
  };

  return (
    <div className="bg-login-bg bg-left bg-no-repeat bg-contain bg-black h-screen relative">
      <div className=" flex flex-col items-center justify-center h-full lg:absolute lg:left-3/4 lg:translate-x-[-100%]">
        <h1 className="text-white text-xl font-bold tracking-[10px] mb-[20px]">
          VERSION <span className="text-primary">LOGIN</span>
        </h1>
        <form
          action="POST"
          className="text-white text-sm font-secondary border-2 border-primary lg:p-12 p-6 flex flex-col [&>input]:mb-[5px] [&>input]:p-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="username" className="h-[33px]">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-[rgba(52,152,219,0.25)] w-[301px] h-[33px]"
          />
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
          <label htmlFor="college" className="h-[33px]">
            COLLEGE
          </label>
          <input
            type="text"
            id="college"
            required
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="bg-[rgba(52,152,219,0.25)] w-[301px] h-[33px]"
          />
          <label htmlFor="rollNumber" className="h-[33px]">
            ROLL NUMBER
          </label>
          <input
            type="text"
            id="rollNumber"
            required
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="bg-[rgba(52,152,219,0.25)] w-[301px] h-[33px]"
          />
          <label htmlFor="phoneNumber" className="h-[33px]">
            PHONE NUMBER
          </label>
          <input
            type="number"
            id="phoneNumber"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-[rgba(52,152,219,0.25)] w-[301px] h-[33px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <label htmlFor="password" className="h-[33px]">
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
            <Link className="text-xs cursor-pointer" to="forgotPassword">
              Forgot Password?
            </Link>
            <span className="border-2 border-primary">
              <button className="border-2 border-primary p-2" type="submit">
                REGISTER
              </button>
            </span>
          </div>
          <p className="text-center mt-8 text-xs">
            Already have account?{' '}
            <Link className="text-primary cursor-pointer" to="/login">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
