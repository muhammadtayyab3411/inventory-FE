import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import socketIOClient from 'socket.io-client';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const [notificationMessage, setNotificationMessage] = useState('');
  const socket = socketIOClient('http://localhost:8000');

  useEffect(() => {
    // Event listener for the "receiveNotification" event from the server
    socket.on('receiveNotification', (data) => {
      setNotificationMessage(data.message);
    });

    // // Clean up the socket connection when the component unmounts
    // return () => {
    //   socket.disconnect();
    // };
  }, [socket]);

  const handleButtonClick = () => {
    // Emit a "notification" event to the server
    socket.emit('notification', { message: 'New notification!' });
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/api/users")
  //     .then((response) => setUsers(response.data))
  //     .catch((error) => console.log(error));
  // }, []);
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <div>
            <button onClick={handleButtonClick}>Click Me</button>
            {notificationMessage && <p>{notificationMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
