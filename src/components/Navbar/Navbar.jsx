import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NotificationsNoneOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import "./navbar.css";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("General");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const pageName = path.substring(1);
    setCurrentPage(pageName || "General");
  }, [location]);
  return (
    <div className="top-navbar">
      <div className="main-wrapper">
        <p className="heading-text">{currentPage}</p>
        <div className="userInfo">
          <NotificationsNoneOutlined />
          <div className="image">
            <img src="" alt="" className="image" />
          </div>
          <div className="role">
            Admin | Maryam
            <KeyboardArrowDownOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
