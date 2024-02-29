/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import toastStyle from '../../utilities/toastStyle';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';

const BASE_URL = import.meta.env.VITE_BASE_URL;

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formNo, setFormNo] = useState(1);
  const [fullName, setfullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [college, setCollege] = useState('');
  const [rollNo, setRollNo] = useState('');

  const [toggle, visible] = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName || !phoneNumber || !college) {
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
      name: fullName,
      mobile: phoneNumber,
      university: college,
      rollno: rollNo,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}/signup`,
        { ...data },
        { withCredentials: true }
      );

      if (res.data?.status === 'success') {
        toast.success(res.data.message, toastStyle);
        toggle();
      }
    } catch (error) {
      const msg = error.response.data.message || error.response.data.error;
      toast.error(msg, toastStyle);
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
    }

    if (formNo === 2) {
      if (!college || !rollNo) {
        toast.error('Please fill all the fields', toastStyle);
        return;
      }
    }
    setFormNo(formNo + 1);
  };

  return (
    <Layout>
      {/* <p className=" text-white text-center fixed xl:bottom-1/2 xl:left-1/4 bottom-20 left-0 border-2 border-red-700 p-2 md:p-5">
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
      <FormContainer title="Register" prefixTitle="Version">
        <form
          className={`text-white p-10 md:p-20 flex flex-col form form__auth form__auth--register ${formNo > 1 ? 'md:mt-6' : ''}`}
          onSubmit={handleSubmit}
        >
          {formNo === 1 && (
            <>
              <InputBox
                type="text"
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
                      src="/res/authPage/next.svg"
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
                note="Enter it as college name, location e.g Modern College, Pune"
              />

              <InputBox
                type="text"
                inputId="rollNo"
                onChange={setRollNo}
                value={rollNo}
                label="College Roll No"
              />

              <div className="flex mt-1 justify-between items-center">
                <div className="flex">
                  <Button
                    type="button"
                    onClick={() => setFormNo(formNo - 1)}
                    designType="icon"
                  >
                    <img
                      src="/res/authPage/next.svg"
                      alt="next"
                      className="h-11 mt-2 rotate-180"
                    />
                  </Button>
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
                      src="/res/authPage/next.svg"
                      alt="next"
                      className="h-11 mt-2"
                    />
                  </Button>
                </div>
              </div>
            </>
          )}
          {formNo === 3 && (
            <>
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
                    onClick={() => setFormNo(2)}
                    designType="icon"
                  >
                    <img
                      src="/res/authPage/next.svg"
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
