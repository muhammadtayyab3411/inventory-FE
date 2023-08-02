import axios from 'axios';

function useUser() {
  const token = localStorage.getItem('jwtoken');

  const getUserDetails = () => {
    return new Promise((resolve, reject) => {
      axios
        .get('http://localhost:8000/api/userDetail', {
          headers: { 'x-auth-token': token },
        })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  const getUserDetailById = (user_id) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          'http://localhost:8000/api/userDetailById',
          { user_id },
          { headers: { 'x-auth-token': token } }
        )
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  const saveUserDetails = (
    firstName,
    lastName,
    phone,
    country,
    language,
    profilePicture
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          'http://localhost:8000/api/userDetail',
          { firstName, lastName, phone, country, language, profilePicture },
          { headers: { 'x-auth-token': token } }
        )
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  return { getUserDetails, saveUserDetails, getUserDetailById };
}

export default useUser;
