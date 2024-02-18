/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import toastStyle from '../../utilities/toastStyle';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formNo, setFormNo] = useState(1);
  const [fullName, setfullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [college, setCollege] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName || !phoneNumber || !college) {
      toast.error('Please fill all the fields', toastStyle);
      return;
    }

    const data = {
      email,
      password,
      name: fullName,
      mobile: phoneNumber,

      university: college,

      /**
       * ! Need to remove this, placeholder
       */ rollno: '090',
    };

    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { ...data },
        { withCredentials: true }
      );

      if (res.data?.status === 'success') {
        toast.success(res.data.status, toastStyle);
        navigate('/');
      }
    } catch (error) {
      toast.error('Something went wrong', toastStyle);
    }
  };

  const handleNext = () => {
    if (formNo === 1) {
      if (!email || !password || !confirmPassword) {
        toast.error('Please fill all the fields', toastStyle);
        return;
      }

      if (password.length < 8) {
        toast.error('Password should be atleast 8 characters long', toastStyle);
        return;
      }

      if (password !== confirmPassword) {
        toast.error('Passwords do not match', toastStyle);
        return;
      }
      setFormNo(2);
    }
  };

  return (
    <Layout>
      <FormContainer title="Register" prefixTitle="Version">
        <form
          className="text-white p-10 md:p-20 flex flex-col form form__auth form__auth--register "
          onSubmit={handleSubmit}
        >
          {formNo === 1 && (
            <>
              <InputBox
                type="email"
                inputId="userEmail"
                onChange={setEmail}
                label="Email"
                value={email}
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
                  <Button
                    type="button"
                    onClick={handleNext}
                    designType="icon"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleNext();
                      }
                    }}
                  >
                    <img
                      src="../../../public/res/authPage/next.svg"
                      alt="next"
                      className="h-11 mt-2"
                    />
                  </Button>
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
              />
              <InputBox
                type="text"
                inputId="fullName"
                onChange={setfullName}
                label="Your Name"
                value={fullName}
              />
              <InputBox
                type="number"
                inputId="phoneNumber"
                onChange={setPhoneNumber}
                label="Phone Number"
                value={phoneNumber}
              />

              <div className="flex mt-1 justify-between items-center">
                <div className="flex">
                  <Button
                    type="button"
                    onClick={() => setFormNo(1)}
                    designType="icon"
                  >
                    <img
                      src="../../../public/res/authPage/next.svg"
                      alt="next"
                      className="h-11 mt-2 rotate-180"
                    />
                  </Button>
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
