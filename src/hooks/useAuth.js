import axios from 'axios';

function useAuth() {
  const signup = (name, email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post('http://localhost:8000/api/register', {
          name,
          email,
          password,
        });
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post('http://localhost:8000/api/login', {
          email,
          password,
        });
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  const forgotPassword = (email) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          'http://localhost:8000/api/forget-password',
          {
            email,
          }
        );
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  const getQRCode = async (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post('http://localhost:8000/api/getQrCode', {
          userId,
        });
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  const verifyOTP = async (email, otp) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post('http://localhost:8000/api/enable-2fa', {
          email,
          otp,
        });
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  const validateResetPasswordToken = (token) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          'http://localhost:8000/api/validateResetPasswordToken',
          {
            token,
          }
        );
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  const resetPassword = (token, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          'http://localhost:8000/api/resetPassword',
          {
            token,
            password,
          }
        );
        resolve(res);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  };

  return {
    signup,
    getQRCode,
    verifyOTP,
    login,
    forgotPassword,
    validateResetPasswordToken,
    resetPassword,
  };
}

export default useAuth;
