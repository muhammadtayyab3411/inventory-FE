import React from "react";
import "./setting.css";
import Buttons from "../buttons/Buttons";
import InnerSettings from "../innerSettings/InnerSettings";

const Setting = () => {
  return (
    <div className="setting container border border-dark rounded-lg shadow p-4 mt-2 mb-0 d-flex">
      <InnerSettings />
      <div className="right flex-grow-3 p-4">
        <p className="heading fw-bold fs-4">Account Settings</p>
        <hr className="my-2" />
        <div className="my-3">
          <p className="fw-bold my-1">Profile</p>
          <span className="fw-medium fs-6">
            This information will be displayed publicly so be careful what you
            share
          </span>
          <div className="d-flex column-gap-2 align-items-center mt-2">
              <div className="image-box w-50 d-flex flex-column justify-content-center align-items-center">
                  <img src="" alt="" className="user-img"/>
                  <p className="text-center my-2">Insert your profile picture*</p>
              </div>
            <div className="infoBox ">
                <form action="">
                <div className="userInfo">
                  <input type="text" placeholder="First Name" className="w-50" />
                  <input type="text" placeholder="Last Name" className="w-50"/>
                  <input type="email" placeholder="Email Address" className="w-50"/>
                </div>
                </form>
            </div>
          </div>

          <div className="pInfo mt-5">
              <p className="fw-bold my-1">Personal Information</p>
              <span className="fw-medium fs-6">
                This information will be kept for personal use. We will not
                share it publicly.
              </span>
              <div className="userInfo">
                <input type="text" placeholder="Email Address" />
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Language" />
              </div>
              </div>
          </div>
          <hr />
          <Buttons />
      </div>
    </div>
  );
};

export default Setting;
