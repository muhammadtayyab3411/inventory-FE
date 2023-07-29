import React from 'react'
import "./overallReport.css"
import TotalStats from './TotalStats'
import BestSellingCategory from './BestSellingCategory'
import BestSellingProduct from './BestSellingProduct'
import Chart from './Chart'

const OverallReport = () => {
  return (
    <div className='inventoryDetails'>
        <div className="top d-flex align-items-center mt-2 mb-0">
            <div className="topOverview flex-grow-1 container rounded-lg  p-4 pb-2">
                <TotalStats />
            </div>
            <div className="topBSC flex-grow-1 container rounded-lg p-4 pb-0">
                <BestSellingCategory />
            </div>
        </div>
        <div className="profitRevenue container rounded-lg p-4 pb-2 mt-2">
            <Chart />    
        </div>
        <div className="bestSellingProduct container rounded-lg p-4 pb-2 mt-2">
            <BestSellingProduct />  
        </div>
    </div>
  )
}

export default OverallReport
