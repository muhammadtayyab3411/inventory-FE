import React, { useEffect, useState } from 'react'
import "./personalInformation.css"
import InnerSettings from '../innerSettings/InnerSettings';
import axios from 'axios';

const PersonalInformation = () => {
  const [userData, setUserData] = useState({name: '', email: ''});

  useEffect(() => {
    // Fetch user data from the backend API when the component mounts
    axios.get('http://localhost:8000/api/user/1') // Replace '1' with the actual user ID
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  return (
    <div className="personalInfo container rounded-lg shadow p-4 mt-2 mb-0 d-flex">
      
      <InnerSettings/>
      
      <div className="right flex-grow-3 w-100 p-4">
        
        <p className="heading fw-bold fs-4">Personal Information</p>
        
        <hr className="my-2" />

        <div className="image-box w-50 my-4 mx-3">
          <img src="" alt="" className="user-img"/>
        </div>

        <div className="infoBox">
         <form action="">
          <div className="userInfo">
            <input type="text" id="name" name="name" value={userData.name} readOnly />
            <input type="text" placeholder="Urdu" readOnly/>
            <input type="email" id="email" name="email" value={userData.email} readOnly/>
            <input type="number" placeholder="+92-307213421" readOnly/>
            <input type="country" placeholder="Pakistan" readOnly/>
          </div>
         </form>
        </div>

        <hr className='my-3'/>

        <div className="billingInfo">
            <p className="fw-bold my-1">Billing Information</p>
            <span className="fw-medium fs-6">
               This information will be kept for personal use. We will not
               share it publicly.
            </span>

            <div className="userInfo">
                <input type="text" placeholder="Bank Transfer" readOnly/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInformation;
