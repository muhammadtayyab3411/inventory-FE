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
    <div className="top-navbar d-flex align-items-center">
      <div className="main-wrapper w-100 p-4 d-flex align-items-center justify-content-between">
        <p className="heading-text fw-bold fs-5 lh-1 mt-3">{currentPage}</p>
        <div className="userInfo d-flex align-items-center">
          <NotificationsNoneOutlined />
          <div className="image">
            <img src="" alt="" className="image" />
          </div>
          <div className="role d-flex align-items-center">Admin | Hamza</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
