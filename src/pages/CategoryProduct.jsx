import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import CategoryProducts from '../components/categoryProducts/CategoryProducts';

const CategoryProduct = () => {
  const { categoryId } = useParams();

  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <CategoryProducts categoryId={categoryId} />
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
