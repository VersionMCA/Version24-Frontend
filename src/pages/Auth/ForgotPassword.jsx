import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

export default function Login() {
  const [email, setEmail] = useState('');

  // const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Layout>
      <FormContainer title="Password" prefixTitle="Forget">
        <form
          className="text-white p-10 md:p-20 flex flex-col form form__auth form__auth--forgetPass md:mt-6"
          onSubmit={handleSubmit}
        >
          <InputBox
            type="email"
            inputId="userEmail"
            onChange={setEmail}
            label="Email"
            value={email}
            isRequired
          />
          <div className="flex justify-end">
            <Button designType="primary" type="submit">
              Generate OTP
            </Button>
          </div>
        </form>
      </FormContainer>
    </Layout>
  );
}
