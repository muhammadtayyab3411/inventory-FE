import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button } from '@material-ui/core';

const BestSellingCategory = () => {
  const ITEMS_PER_PAGE = 3;

  const rowData = [
    { id: 1, category: 'Vegetable', turnover: '25000$', increaseby: '3.2%' },
    { id: 2, category: 'Fruit', turnover: '18000$', increaseby: '5.5%' },
    { id: 3, category: 'Meat', turnover: '30000$', increaseby: '2.1%' },
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
    const textColor = increaseByValue > 0 ? 'green' : 'black';
    return <span style={{ color: textColor }}>{params.value}</span>;
  };

  const gridOptions = {
    columnDefs: [
      { headerName: 'Category', field: 'category', flex: 1 },
      { headerName: 'Turnover', field: 'turnover', flex: 1 },
      { headerName: 'Increased By', field: 'increaseby', flex: 1 },
    ],
    domLayout: 'autoHeight',
    rowBuffer: 0,
    maxBlocksInCache: 1,
    maxConcurrentDatasourceRequests: 1,
    cacheBlockSize: ITEMS_PER_PAGE,
    cacheOverflowSize: ITEMS_PER_PAGE,
    rowHeight: 35,
    headerHeight: 40,
    suppressHorizontalScroll: true,
    cellRenderer: increasedByCellRenderer 
  };

  return (
    <div className=''>
      <div className="d-flex justify-content-between">
        <p className="topBscHeading">Best Selling Category</p>
        <div className="d-flex align-items-center">
          <Button disabled={currentPage === 1} onClick={handlePreviousPage} className="">
            Previous
          </Button>
          <Button disabled={currentPage === totalPages} onClick={handleNextPage} className="">
            Next
          </Button>
        </div>
      </div>
      <div className="ag-theme-alpine m-0" style={{ width: '100%', margin: '0', maxHeight: "180px", overflow:'hidden'}}>
        <AgGridReact gridOptions={gridOptions} rowData={paginatedData} />
      </div>
    </div>
  );
};

export default BestSellingCategory;
