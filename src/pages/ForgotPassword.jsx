import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import useAuth from '../hooks/useAuth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { forgotPassword } = useAuth();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    const res = await forgotPassword(email);

    if (res.status == 200) setMessage('reset password link send to your email');
  };

  return (
    <div className="credentialsContainer">
      <div className="credentialsSubContainer">
        <div className="forget-password form">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="header">Forgot your password?</div>
          {message && <p className="text-center">{message}</p>}
          <form onSubmit={handleForgotPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input type="submit" className="button" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
