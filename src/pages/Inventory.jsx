import React from 'react'
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import InventoryDetails from '../components/inventoryDetails/InventoryDetails';

const Inventory = () => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <div>
            <InventoryDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory
