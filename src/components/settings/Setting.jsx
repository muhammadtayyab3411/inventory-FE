import React, { useEffect, useState } from "react";
import "./setting.css";
import Buttons from "../buttons/Buttons";
import InnerSettings from "../innerSettings/InnerSettings";
import useUser from "../../hooks/useUser";

const Setting = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");

  const { saveUserDetails, getUserDetails } = useUser();

  useEffect(() => {
    getUserDetails().then(({ data }) => {
      setFirstName(data.userDetail.first_name);
      setLastName(data.userDetail.last_name);
      setPhone(data.userDetail.phone);
      setCountry(data.userDetail.country);
      setLanguage(data.userDetail.language);
    });
  }, []);

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
  };

  const updateUserDetails = () => {
    saveUserDetails(firstName, lastName, phone, country, language, "")
      .then((res) => {
        console.log(res);
        alert("User detail updated successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="setting container rounded-lg  p-4 mt-2 mb-0 d-flex">
      <InnerSettings />
      <div className="right flex-grow-3 p-4">
        <p className="innerHeading fw-bold fs-4">Account Settings</p>
        <hr className="my-2" />
        <div className="my-3">
          <p className="fw-bold my-1">Profile</p>
          <span className="fw-medium fs-6">
            This information will be displayed publicly so be careful what you
            share
          </span>
          <div className="d-flex column-gap-2 align-items-center mt-2">
            <div className="image-box w-50 d-flex flex-column justify-content-center align-items-center">
              <img
                src="https://randomuser.me/api/portraits/men/47.jpg"
                alt=""
                className="user-img"
              />
              <p className="text-center my-2">Insert your profile picture*</p>
            </div>
            <div className="infoBox ">
              <form action="">
                <div className="userInfo">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-50"
                    value={firstName}
                    onChange={updateField(setFirstName)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={updateField(setLastName)}
                    className="w-50"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="pInfo mt-5">
            <p className="fw-bold my-1">Personal Information</p>
            <span className="fw-medium fs-6">
              This information will be kept for personal use. We will not share
              it publicly.
            </span>
            <div className="userInfo">
              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={updateField(setPhone)}
              />
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={updateField(setCountry)}
              />
              <input
                type="text"
                placeholder="Language"
                value={language}
                onChange={updateField(setLanguage)}
              />
            </div>
          </div>
        </div>
        <hr />
        <Buttons updateUserDetails={updateUserDetails} />
      </div>
    </div>
  );
};

export default Setting;
