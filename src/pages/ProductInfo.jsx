import React from 'react';
import ProductInformation from '../components/productInformation/ProductInformation';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { id } = useParams();

  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <div>
            <ProductInformation productId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
