import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Button } from "@material-ui/core";
import useProducts from "../../hooks/useProducts";
import { useNavigate } from "react-router-dom";

const BestSellingProduct = () => {
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  const navigate = useNavigate();

  const { getBestSellingProducts } = useProducts();

  useEffect(() => {
    getBestSellingProducts()
      .then(({ data }) => {
        data.map((product) => {
          product["turnover"] = product.buying_price + product.sold_amount;
          product["increasedBy"] =
            (product.sold_amount * product.buying_price) /
            ((product.quantity + product.sold_amount) * product.buying_price);
        });
        setBestSellingProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const ITEMS_PER_PAGE = 5;

  const rowData = [
    {
      id: 1,
      product: "Tomato",
      productid: "12",
      category: "Vegetable",
      turnover: "25000$",
      increaseby: "3.2%",
    },
    {
      id: 2,
      product: "Banana",
      productid: "15",
      category: "Fruit",
      turnover: "18000$",
      increaseby: "5.5%",
    },
    {
      id: 3,
      product: "Chicken",
      productid: "18",
      category: "Meat",
      turnover: "30000$",
      increaseby: "2.1%",
    },
    {
      id: 4,
      product: "Chicken",
      productid: "18",
      category: "Meat",
      turnover: "30000$",
      increaseby: "2.1%",
    },
    {
      id: 5,
      product: "Chicken",
      productid: "18",
      category: "Meat",
      turnover: "30000$",
      increaseby: "2.1%",
    },
    {
      id: 5,
      product: "Chicken",
      productid: "18",
      category: "Meat",
      turnover: "30000$",
      increaseby: "2.1%",
    },
    // Add more data rows as needed
  ];

  const totalPages = Math.ceil(rowData.length / ITEMS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, rowData.length);
  const paginatedData = rowData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const increasedByCellRenderer = (params) => {
    const increaseByValue = parseFloat(params.value);
    const textColor = increaseByValue > 0 ? "green" : "black";
    return <span style={{ color: textColor }}>{params.value}</span>;
  };

  const gridOptions = {
    columnDefs: [
      { headerName: "Product", field: "name", flex: 1 },
      { headerName: "Product Id", field: "id", flex: 1 },
      { headerName: "Category", field: "category", flex: 1 },
      {
        headerName: "Turnover",
        field: "turnover",
        flex: 1,
        cellRenderer: (params) => `${params.value}$`,
      },
      {
        headerName: "Increased By",
        field: "increasedBy",
        flex: 1,
        cellRenderer: (params) => `${params.value}%`,
      },
    ],
    domLayout: "autoHeight",
    rowBuffer: 0,
    maxBlocksInCache: 1,
    maxConcurrentDatasourceRequests: 1,
    cacheBlockSize: ITEMS_PER_PAGE,
    cacheOverflowSize: ITEMS_PER_PAGE,
    rowHeight: 35,
    headerHeight: 40,
    suppressHorizontalScroll: true,
    cellRenderer: increasedByCellRenderer,
    onRowClicked: (params) => navigate(`/product-info/${params.data.id}`),
  };

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <p className="topBspHeading">Most Stored Product</p>
        <div className="d-flex align-items-center">
          <Button
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            className=""
          >
            Previous
          </Button>
          <Button
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            className=""
          >
            Next
          </Button>
        </div>
      </div>
      <div
        className="ag-theme-alpine pb-2"
        style={{ width: "100%", margin: "0", overflow: "hidden" }}
      >
        <AgGridReact gridOptions={gridOptions} rowData={bestSellingProducts} />
      </div>
    </div>
  );
};

export default BestSellingProduct;
