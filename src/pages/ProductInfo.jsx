import React from 'react'
import ProductInformation from '../components/productInformation/ProductInformation'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'

const ProductInfo = () => {
  return (
    <div className="pageContainer">
      <Sidebar />
      <div className="contentContainer">
        <Navbar />
        <div className="mainContent">
          <div>
            <ProductInformation/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
