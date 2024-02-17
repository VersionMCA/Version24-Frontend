import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import FormContainer from './FormContainer';
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';

export default function ResetPassword() {
  const [otp, setOtp] = useState(undefined);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <FormContainer title="Password" prefixTitle="Forget">
        <form
          className="text-white p-10 md:p-20 flex flex-col form form__auth md:mt-6"
          onSubmit={handleSubmit}
        >
          <InputBox
            type="number"
            inputId="otp"
            onChange={setOtp}
            label="OTP"
            value={otp}
            isRequired
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

          <Button designType="primary" type="submit">
            Reset Password
          </Button>
        </form>
      </FormContainer>
    </Layout>
  );
}
