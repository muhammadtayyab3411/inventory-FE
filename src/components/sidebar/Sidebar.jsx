import React from "react";
import "./sidebar.css";
import { Link, useLocation } from "react-router-dom";
import {
  AssessmentOutlined,
  AssignmentOutlined,
  CalendarMonthOutlined,
  DescriptionOutlined,
  GridViewOutlined,
  LogoutOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  SettingsOutlined,
  ShoppingCartOutlined,
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
      <div className="logo">KoboWeb</div>
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
          <Link to="/Report" style={{ textDecoration: "none" }}>
            <li className={isActive("/Report") ? "active" : ""}>
              <AssessmentOutlined className="icon" />
              <span>Report</span>
            </li>
          </Link>
          <Link to="/Suppliers" style={{ textDecoration: "none" }}>
            <li className={isActive("/Suppliers") ? "active" : ""}>
              <PersonOutlined className="icon" />
              <span>Suppliers</span>
            </li>
          </Link>
          <Link to="/Shop" style={{ textDecoration: "none" }}>
            <li className={isActive("/Shop") ? "active" : ""}>
              <ShoppingCartOutlined className="icon" />
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
              <SettingsOutlined className="icon" />
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
