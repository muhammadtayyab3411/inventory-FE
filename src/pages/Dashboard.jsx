import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import io from "socket.io-client";
import { NotificationsOutlined } from "@mui/icons-material";

const Dashboard = () => {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    return () => {
      const socket = io.connect("http://localhost:8000");
      socket.disconnect();
    };
  }, []);

  const socket = io.connect("http://localhost:8000");

  const handleOrderNow = () => {
    console.log("Order Now Clicked");
    const confirmation = window.confirm(
      "Are you sure you want to place the order?"
    );
    if (confirmation) {
      socket.emit("placeOrder", "orderData");
      socket.on("orderNotification", (data) => {
        setNotification(data.message);
      });
    } else {
      console.log("Order canceled.");
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <button onClick={handleOrderNow}>Order Now</button>
          {notification && (
            <div className="notificationsContainer">
              <NotificationsOutlined
                className="notificationsIcon"
                style={{ fontSize: "36px" }}
              />
              {notification}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
