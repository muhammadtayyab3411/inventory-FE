import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { login } = useAuth();

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login(email, password);
      if (res.status == 200) {
        localStorage.setItem('email', email);
        navigate('/2fa');
      }
    } catch (err) {
      if (err.response.status == 401) setError('Invalid email or password');
    }
  };

  return (
    <div className="credentialsContainer">
      <div className="credentialsSubContainer">
        <div className="login form">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="header">Login Now</div>
          {error && <p className="text-red text-center">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your Email"
              name="email"
              onChange={updateField(setEmail)}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              onChange={updateField(setPassword)}
            />
            <Link to="/forgot-password">Forgot Password</Link>
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="signup">
            <span className="signup">
              Don't have an account?
              <Link to="/register">
                <label for="check">Register Here</label>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
