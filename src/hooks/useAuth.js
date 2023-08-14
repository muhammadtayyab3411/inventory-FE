import axios from 'axios';

function useAuth() {
  const apiURL = 'https://lime-crowded-foal.cyclic.app';

  const signup = (name, email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`${apiURL}/api/register`, {
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
        const res = await axios.post(`${apiURL}/api/login`, {
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
        const res = await axios.post(`${apiURL}/api/forget-password`, {
          email,
        });
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
        const res = await axios.post(`${apiURL}/api/getQrCode`, {
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
        const res = await axios.post(`${apiURL}/api/enable-2fa`, {
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
          `${apiURL}/api/validateResetPasswordToken`,
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
        const res = await axios.post(`${apiURL}/api/resetPassword`, {
          token,
          password,
        });
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
