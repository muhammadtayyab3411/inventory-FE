import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import useAuth from '../hooks/useAuth';
import OTPInput from 'react-otp-input';

const ValidateOTP = () => {
  const [otp, setOtp] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [error, setError] = useState('');

  const { verifyOTP } = useAuth();

  useEffect(() => {
    if (otp.length === 6) setBtnDisabled(false);
    else setBtnDisabled(true);
  }, [otp.length]);

  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const res = await verifyOTP(localStorage.getItem('email'), otp);
      if (res.status == 200) {
        localStorage.setItem('jwtoken', res.data.token);
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      if (err.response.status == 401) setError('Invalid OTP');
    }
  };

  return (
    <div className="credentialsContainer">
      <div className="credentialsSubContainer">
        <div className="registration form">
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          {error && <p className="text-red text-center">{error}</p>}
          <div className="header text-center">
            <h2 className="font-1">Two Factor Authentication</h2>
            <p className="para">
              To be able to authorize, you need to enter the OTP generated from
              Google Authenticator app
            </p>
          </div>

          <div className="d-flex flex-column align-items-center justify-content-center mt-4">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{ width: 50, marginRight: '10px' }}
              renderInput={(props) => <input {...props} />}
            />

            <button
              type="button"
              disabled={btnDisabled}
              className=" app-btn w-100 mb-4 mt-0"
              onClick={handleVerify}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateOTP;
