import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import useAuth from '../hooks/useAuth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { resetPassword, validateResetPasswordToken } = useAuth();

  useEffect(() => {
    validateTokenBeforePageLoad();
  }, []);

  const validateTokenBeforePageLoad = async () => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get('token'));

    try {
      const res = await validateResetPasswordToken(params.get('token'));

      if (res.status !== 200) navigate('/login');
    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  };

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const res = await resetPassword(token, password);

      if (res.status == 200) {
        setMessage('Password changed successfully!');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else setError('something went wrong');
    } catch (err) {
      console.log(err);
      setError('something went wrong');
    }
  };

  return (
    <div className="credentialsContainer">
      <div className="credentialsSubContainer">
        <div className="forget-password form">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="header">Reset Password</div>
          {message && <p className="text-center">{message}</p>}
          {error && <p className="text-center text-red">{error}</p>}
          <form onSubmit={handleResetPassword}>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={updateField(setPassword)}
            />
            <input
              type="password"
              placeholder="Retype password"
              name="confirmpassword"
              onChange={updateField(setConfirmPassword)}
            />

            <input type="submit" className="button" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
