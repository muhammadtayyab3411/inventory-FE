import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";
import CategoryProducts from "../components/categoryProducts/CategoryProducts";

const CategoryProduct = () => {
  const location = useLocation();
  const currentPage = location.pathname.substring(1);
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <CategoryProducts />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
