import React from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
  AssignmentOutlined,
  CalendarMonthOutlined,
  DescriptionOutlined,
  GridViewOutlined,
  LogoutOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  SettingsOutlined,
  TextSnippet,
} from "@mui/icons-material";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (linkUrl) => {
    return location.pathname === linkUrl;
  };

  const handleLogout = () => {
    // Clear token and email from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    // Redirect to the login page or any other desired page after logout
    // Example: Redirecting to the login page
    window.location.href = "/login";
  };

  return (
    <div className="sidebar">
      <div className="logo"></div>
      <div className="items">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className={isActive("/") ? "active" : ""}>
              <GridViewOutlined className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/Inventory" style={{ textDecoration: "none" }}>
            <li className={isActive("/Inventory") ? "active" : ""}>
              <CalendarMonthOutlined className="icon" />
              <span>Inventory</span>
            </li>
          </Link>
          <Link to="/Customers" style={{ textDecoration: "none" }}>
            <li className={isActive("/ Customers") ? "active" : ""}>
              <PersonOutlined className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/Shop" style={{ textDecoration: "none" }}>
            <li className={isActive("/Shop") ? "active" : ""}>
              <CalendarMonthOutlined className="icon" />
              <span>Shop</span>
            </li>
          </Link>

          <Link to="/Orders" style={{ textDecoration: "none" }}>
            <li className={isActive("/Orders") ? "active" : ""}>
              <DescriptionOutlined className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/Settings" style={{ textDecoration: "none" }}>
            <li className={isActive("/Settings") ? "active" : ""}>
              <CalendarMonthOutlined className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <Link to="/Sign-Out" style={{ textDecoration: "none" }}>
            <li
              className={isActive("/Sign-Out") ? "active" : ""}
              onClick={handleLogout}
            >
              <LogoutOutlined className="logout" />
              <span className="logout">Sign out</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
