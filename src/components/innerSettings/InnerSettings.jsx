import React from "react";
import "./innerSettings.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { NotificationsOutlined } from "@mui/icons-material";

const InnerSettings = () => {
  return (
    <div className="left shadow-sm bg-light flex-grow-1">
      <div className="top my-4 pl-3">
        <p className="title fw-bold fs-4 p-3 text-success">Settings</p>
      </div>
      <div className="bottom">
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li className="d-flex align-items-center p-3 gap-3 m-2 rounded cursor-pointer">
            <HomeOutlinedIcon className="icon fs-4 text-dark" />
            <span className="fs-6 fw-semibold text-dark">
              Personal Information
            </span>
          </li>
          <li className="active align-items-center p-3 gap-3 m-2 rounded cursor-pointer">
            <BookmarksOutlinedIcon className="icon fs-4 text-dark" />
            <span className="fs-6 fw-semibold text-dark">Account Settings</span>
          </li>
          <li className="d-flex align-items-center p-3 gap-3 m-2 rounded cursor-pointer">
            <BusinessCenterOutlinedIcon className="icon fs-4 text-dark" />
            <span className="fs-6 fw-semibold text-dark">
              Billing Information
            </span>
          </li>
          <li className="d-flex align-items-center p-3 gap-3 m-2 rounded cursor-pointer">
            <NotificationsOutlined className="icon fs-4 text-dark" />
            <span className="fs-6 fw-semibold text-dark">Notifications</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InnerSettings;
