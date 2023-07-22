import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Logo from '../assets/logo.png';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log(name, email, password);
    try {
      const res = await signup(name, email, password);
      console.log(res);
      if (res.status == '200') {
        localStorage.setItem('email', email);
        navigate(`/enable-2fa?user=${res.data.user.id}`);
      }
    } catch (err) {
      console.log(err);
      if (err.response.status == '409')
        setError('User with the provided email already exists');
    }
  };

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
  };

  return (
    <div className="credentialsContainer">
      <div className="credentialsSubContainer">
        <div className="registration form">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="header">Create an account</div>
          {error && <p className="text-red">{error}</p>}
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              onChange={updateField(setName)}
            />
            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              onChange={updateField(setEmail)}
            />
            <input
              type="password"
              placeholder="Create your Password"
              name="password"
              onChange={updateField(setPassword)}
            />
            <input type="submit" className="button" value="Register" />
          </form>
          <div className="signup">
            <span className="signup">
              Already have an account?
              <Link to="/login">
                <label>Login</label>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
