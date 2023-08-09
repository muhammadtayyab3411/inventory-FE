import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import StorageLocations from "../components/storageLocations/StorageLocations";

const ManageStorage = () => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <div>
            <StorageLocations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStorage;
