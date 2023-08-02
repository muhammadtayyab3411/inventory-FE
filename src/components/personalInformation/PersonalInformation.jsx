import React, { useEffect, useState } from 'react';
import './personalInformation.css';
import InnerSettings from '../innerSettings/InnerSettings';
import axios from 'axios';
import useUser from '../../hooks/useUser';

const PersonalInformation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [language, setLanguage] = useState('');
  const { getUserDetails } = useUser();

  useEffect(() => {
    getUserDetails().then(({ data }) => {
      console.log(data);
      setName(`${data.userDetail.first_name} ${data.userDetail.last_name}`);
      setEmail(data.email);
      setPhone(data.userDetail.phone);
      setCountry(data.userDetail.country);
      setLanguage(data.userDetail.language);
    });
  }, []);
  return (
    <div className="personalInfo container rounded-lg shadow p-4 mt-2 mb-0 d-flex">
      <InnerSettings />

      <div className="right flex-grow-3 w-100 p-4">
        <p className="heading fw-bold fs-4">Personal Information</p>

        <hr className="my-2" />

        <div className="image-box w-50 my-4 mx-3">
          <img
            src="https://randomuser.me/api/portraits/men/47.jpg"
            alt=""
            className="user-img"
          />
        </div>

        <div className="infoBox">
          <form action="">
            <div className="userInfo">
              <input type="text" id="name" name="name" value={name} readOnly />
              <input type="text" value={language} readOnly />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                readOnly
              />
              <input type="number" value={phone} readOnly />
              <input type="country" value={country} readOnly />
            </div>
          </form>
        </div>

        <hr className="my-3" />

        <div className="billingInfo">
          <p className="fw-bold my-1">Billing Information</p>
          <span className="fw-medium fs-6">
            This information will be kept for personal use. We will not share it
            publicly.
          </span>

          <div className="userInfo">
            <input
              type="text"
              placeholder="Bank Transfer"
              value="Card"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
