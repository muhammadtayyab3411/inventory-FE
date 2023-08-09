import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import Categories from "../components/categories/Categories";

const ProductCategories = () => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
