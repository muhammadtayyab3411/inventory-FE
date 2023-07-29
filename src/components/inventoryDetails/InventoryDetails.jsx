import React from 'react'
import "./inventoryDetails.css"
import OverallInventory from '../overallInventory/OverallInventory'
import ProductDetails from '../productDetails/ProductDetails'

const InventoryDetails = () => {
  return (
    <div className='inventoryDetails d-flex flex-column'>
        <div className="overallInventory container rounded-lg p-4 mt-2 mb-0">
            <OverallInventory />
        </div>
        <div className="productDetails container rounded-lg p-4 mt-2 mb-0">
            <ProductDetails />    
        </div>
    </div>
  )
}

export default InventoryDetails
