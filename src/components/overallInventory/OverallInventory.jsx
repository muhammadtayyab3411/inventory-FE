import React from 'react'
import "./overallInventory.css"

const OverallInventory = () => {
  return (
    <div className="">
      <p className='overallInventoryHeading'>Overall Inventory</p>
      <div className='d-flex gap-10 w-100 align-items-center justify-content-between'>
        
        <div className="categories w-20">
            <p className='heading text-primary'>Categories</p>
            <p className="amount">14</p>
            <span className="time">Last 7 days</span>
        </div>

        <div className="totalProducts w-20">
            <p className='heading text-warning'>Total Products</p>
            <div className="productStats d-flex">
                <div className="left">
                  <p className="amount">14</p>
                  <span className="time">Last 7 days</span>
                </div>
                <div className="right">
                  <p className="amount">25000$</p>
                  <span className="time">Revenue</span>
                </div>
            </div>
        </div>

        <div className="topSellings w-20">
            <p className='heading text-purple'>Top Sellings</p>
            <div className="topSellingStats d-flex">
                <div className="left">
                  <p className="amount">14</p>
                  <span className="time">Last 7 days</span>
                </div>
                <div className="right">
                  <p className="amount">25000$</p>
                  <span className="time">Cost</span>
                </div>
            </div>
        </div>

        <div className="lowStacks">
            <p className='heading text-danger'>Low Stack</p>
            <div className="lowStacksStats d-flex justify-content-between">
                <div className="left">
                  <p className="amount">14</p>
                  <span className="time">Last 7 days</span>
                </div>
                <div className="right">
                  <p className="amount">25000$</p>
                  <span className="time">Not in Stock</span>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default OverallInventory
