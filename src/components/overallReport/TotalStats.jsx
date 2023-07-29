import React from "react";

const TotalStats = () => {
  return (
    <div>
      <p className="topOverviewHeading">Overview</p>
      <div className="totalStats d-flex align-items-center">
        <div className="totalProfit flex-grow-1">
          <p className="amount">21,190$</p>
          <p className="totalProfitText desc">Total Profit</p>
        </div>
        <div className="totalRevenue flex-grow-1">
          <p className="amount">18,300$</p>
          <p className="totalRevenueText desc">Revenue</p>
        </div>
        <div className="totalSales flex-grow-1">
          <p className="amount">17,342$</p>
          <p className="totalSalesText desc">Sales</p>
        </div>
      </div>
      <hr className="topOverviewHr" />
      <div className="netStats d-flex align-items-center">
        <div className="netPurchase flex-grow-1">
          <p className="amount">1,21,190$</p>
          <p className="desc">Net Purchase Value</p>
        </div>
        <div className="netSale flex-grow-1">
          <p className="amount">80,190$</p>
          <p className="desc">Net Sale Value</p>
        </div>
        <div className="momProfit flex-grow-1">
          <p className="amount">30,100$</p>
          <p className="desc">MoM Profit</p>
        </div>
        <div className="yoyProfit flex-grow-1">
          <p className="amount">2,21,100$</p>
          <p className="desc">YoYProfit</p>
        </div>
      </div>
    </div>
  );
};

export default TotalStats;
