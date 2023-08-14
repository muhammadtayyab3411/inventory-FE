import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PrivateRoute() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const apiURL = 'https://lime-crowded-foal.cyclic.app';

  useEffect(() => {
    axios
      .get(`${apiURL}/api/isUserLoggedIn`, {
        headers: { 'x-auth-token': localStorage.getItem('jwtoken') },
      })
      .then((res) => {
        if (res.status == 200) setLoggedIn(true);
        else setLoggedIn(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
