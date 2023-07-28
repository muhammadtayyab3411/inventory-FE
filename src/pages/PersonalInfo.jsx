import React, { useEffect, useState } from "react";
import PersonalInformation from "../components/personalInformation/PersonalInformation";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

const PersonalInfo = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Fetch user data from the backend API when the component mounts
    axios
      .get("localhost:8000/api/user/1") // Replace '1' with the actual user ID
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <PersonalInformation />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
