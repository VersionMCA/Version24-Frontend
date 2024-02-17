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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formNo, setFormNo] = useState(2);
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
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
          className="text-white text-sm font-secondar p-10 md:p-20 flex flex-col form form__auth font-secondary"
          onSubmit={(e) => handleSubmit(e)}
        >
          {formNo === 1 && (
            <>
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
              <InputBox
                type="confirmPassword"
                inputId="confirmPassword"
                onChange={setConfirmPassword}
                value={confirmPassword}
                label="Confirm Password"
                isRequired
              />

              <div className="flex mt-1 justify-between items-center">
                <div className="tracking-normal">
                  Have an Account?
                  <Link
                    to="/login"
                    className="text-primary uppercase transition-all hover:font-semibold ml-1"
                  >
                    Login
                  </Link>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setFormNo(2)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setFormNo(2);
                      }
                    }}
                  >
                    <img
                      src="../../../public/res/authPage/next.svg"
                      alt="next"
                      className="h-12 mt-2"
                    />
                  </button>
                </div>
              </div>
            </>
          )}
          {formNo === 2 && (
            <>
              <InputBox
                type="text"
                inputId="college"
                onChange={setCollege}
                label="College"
                value={college}
                isRequired
              />
              <InputBox
                type="text"
                inputId="userName"
                onChange={setUserName}
                label="Your Name"
                value={userName}
                isRequired
              />
              <InputBox
                type="number"
                inputId="phoneNumber"
                onChange={setPhoneNumber}
                label="Phone Number"
                value={phoneNumber}
                isRequired
              />

              <div className="flex mt-1 justify-between items-center">
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setFormNo(1)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        setFormNo(2);
                      }
                    }}
                  >
                    <img
                      src="../../../public/res/authPage/next.svg"
                      alt="next"
                      className="h-12 mt-2 rotate-180"
                    />
                  </button>
                </div>
                <Button designType="primary" type="submit">
                  Register
                </Button>
              </div>
            </>
          )}
        </form>
      </FormContainer>
    </Layout>
  );
}

export default Register;
