/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [college, setCollege] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneNumber.toString().length !== 10) {
      // alert('Not a valid Phone Number');
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
        if (response.data?.status === 'success')
          // alert(response.data.message);
          navigate('/login');
      })
      .catch(() => {
        // console.log(error);
        // alert('Your password is too short, must contain atleast 8 characters.');
      });
  };

  return (
    <Layout>
      <FormContainer title="Register">
        <form
          className="text-white text-sm font-secondar p-10 md:p-20 flex flex-col form form__register font-secondary"
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
            type="email"
            inputId="college"
            onChange={setCollege}
            label="College"
            value={college}
            isRequired
          />

          {/* <label htmlFor="rollNumber" className="h-[33px]">
            ROLL NUMBER
          </label>
          <input
            type="text"
            id="rollNumber"
            required
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="bg-[rgba(52,152,219,0.25)] w-[301px] h-[33px]"
          /> */}

          <InputBox
            type="number"
            inputId="phoneNumber"
            onChange={setPhoneNumber}
            label="Phone Number"
            value={phoneNumber}
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
          <div className="flex mt-3 justify-end">
            <Button designType="primary" type="submit">
              Register
            </Button>
          </div>

          <div className="text-center mt-10">
            Have an account?
            <Link
              to="/login"
              className=" pb-[2px] text-primary uppercase transition-all hover:font-semibold ml-1"
            >
              Sign In
            </Link>
          </div>
        </form>
      </FormContainer>
    </Layout>
  );
}

export default Register;
