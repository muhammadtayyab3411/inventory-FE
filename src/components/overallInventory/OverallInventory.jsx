import React, { useEffect, useState } from 'react';
import './overallInventory.css';
import useProducts from '../../hooks/useProducts';

const OverallInventory = () => {
  const [topSellingProducts, setTopSellingProducts] = useState(0);
  const [topSellingProductsRevenue, setTopSellingProductsRevenue] = useState(0);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [numberOfProductsRevenue, setNumberOfProductsRevenue] = useState(0);
  const [lowStockProducts, setLowStockProducts] = useState(0);
  const [lowStockProductsRevenue, setLowStockProductsRevenue] = useState(0);
  const { getBestSellingProducts, getAllProducts, getLowStockProducts } =
    useProducts();

  useEffect(() => {
    getBestSellingProducts()
      .then(({ data }) => {
        setTopSellingProducts(data.length);
        data.length > 0 &&
          data.map((product) =>
            setTopSellingProductsRevenue(
              (prevState) => prevState + product.buying_price
            )
          );
      })
      .catch((err) => console.log(err));

    getAllProducts()
      .then(({ data }) => {
        setNumberOfProducts(data.length);
        data.length > 0 &&
          data.map((product) =>
            setNumberOfProductsRevenue(
              (prevState) => prevState + product.buying_price
            )
          );
      })
      .catch((err) => console.log(err));

    getLowStockProducts()
      .then(({ data }) => {
        setLowStockProducts(data.length);
        data.length > 0 &&
          data.map((product) =>
            setLowStockProductsRevenue(
              (prevState) => prevState + product.buying_price
            )
          );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <p className="overallInventoryHeading">Overall Inventory</p>
      <div className="d-flex gap-10 w-100 align-items-center justify-content-between">
        <div className="categories w-20">
          <p className="heading text-primary">Categories</p>
          <p className="amount">14</p>
          <span className="time">Last 7 days</span>
        </div>

        <div className="totalProducts w-20">
          <p className="heading text-warning">Total Products</p>
          <div className="productStats d-flex">
            <div className="left">
              <p className="amount">{numberOfProducts}</p>
              <span className="time">Last 7 days</span>
            </div>
            <div className="right">
              <p className="amount">{numberOfProductsRevenue}$</p>
              <span className="time">Revenue</span>
            </div>
          </div>
        </div>

        <div className="topSellings w-20">
          <p className="heading text-purple">Top Sellings</p>
          <div className="topSellingStats d-flex">
            <div className="left">
              <p className="amount">{topSellingProducts}</p>
              <span className="time">Last 7 days</span>
            </div>
            <div className="right">
              <p className="amount">{topSellingProductsRevenue}$</p>
              <span className="time">Cost</span>
            </div>
          </div>
        </div>

        <div className="lowStacks">
          <p className="heading text-danger">Low Stack</p>
          <div className="lowStacksStats d-flex justify-content-between">
            <div className="left">
              <p className="amount">{lowStockProducts}</p>
              <span className="time">Last 7 days</span>
            </div>
            <div className="right">
              <p className="amount">{lowStockProductsRevenue}$</p>
              <span className="time">Not in Stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallInventory;
