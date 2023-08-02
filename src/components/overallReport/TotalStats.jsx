import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';

const TotalStats = () => {
  const [totalProfit, setTotalProfit] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [sales, setSales] = useState(0);
  const [netPurchaseValue, setNetPurchaseValue] = useState(0);
  const [netSaleValue, setNetSalesValue] = useState(0);
  const [momProfit, setMomProfit] = useState(0);
  const [yoyProfit, setYoyProfit] = useState(0);

  const { getAllProductsReport } = useProducts();

  useEffect(() => {
    getAllProductsReport().then(({ data }) => {
      setTotalProfit(data.totalProfit);
      setRevenue(data.totalRevenue);
      setSales(data.totalSales);
      setNetPurchaseValue(data.totalNetPurchaseValue);
      setNetSalesValue(data.totalNetSalesValue);
      setMomProfit(data.totalMoMProfit);
      setYoyProfit(data.totalYoYProfit);
    });
  }, []);

  return (
    <div>
      <p className="topOverviewHeading">Overview</p>
      <div className="totalStats d-flex align-items-center">
        <div className="totalProfit flex-grow-1">
          <p className="amount">{totalProfit}$</p>
          <p className="totalProfitText desc">Total Profit</p>
        </div>
        <div className="totalRevenue flex-grow-1">
          <p className="amount">{revenue}$</p>
          <p className="totalRevenueText desc">Revenue</p>
        </div>
        <div className="totalSales flex-grow-1">
          <p className="amount">{sales}$</p>
          <p className="totalSalesText desc">Sales</p>
        </div>
      </div>
      <hr className="topOverviewHr" />
      <div className="netStats d-flex align-items-center">
        <div className="netPurchase flex-grow-1">
          <p className="amount">{netPurchaseValue}$</p>
          <p className="desc">Net Purchase Value</p>
        </div>
        <div className="netSale flex-grow-1">
          <p className="amount">{netSaleValue}$</p>
          <p className="desc">Net Sale Value</p>
        </div>
        <div className="momProfit flex-grow-1">
          <p className="amount">{momProfit}$</p>
          <p className="desc">MoM Profit</p>
        </div>
        <div className="yoyProfit flex-grow-1">
          <p className="amount">{yoyProfit}$</p>
          <p className="desc">YoYProfit</p>
        </div>
      </div>
    </div>
  );
};

export default TotalStats;
