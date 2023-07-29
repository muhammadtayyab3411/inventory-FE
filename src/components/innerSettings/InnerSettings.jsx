import React from "react";
import "./innerSettings.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import {
  AccountCircleOutlined,
  CreditCardOutlined,
  ManageAccountsOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";

const InnerSettings = () => {
  return (
    <div className="left bg-light flex-grow-1">
      <div className="top my-4 pl-3">
        <p className="title fw-bold fs-4 p-3 text-success">Settings</p>
      </div>
      <div className="bottom">
        <ul className="list-unstyled d-flex flex-column gap-2">
          <li className="d-flex align-items-center p-3 m-2 rounded cursor-pointer">
            <AccountCircleOutlined className="icon fs-4" />
            <span className="fs-6 fw-semibold">Personal Information</span>
          </li>
          <li className="active align-items-center p-3 gap-3 m-2 rounded cursor-pointer">
            <ManageAccountsOutlined className="icon fs-4" />
            <span className="fs-6 fw-semibold">Account Settings</span>
          </li>
          <li className="d-flex align-items-center p-3 gap-3 m-2 rounded cursor-pointer">
            <CreditCardOutlined className="icon fs-4 " />
            <span className="fs-6 fw-semibold ">Billing Information</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InnerSettings;
