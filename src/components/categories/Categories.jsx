import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@material-ui/core';
import './categories.css';
import { useNavigate } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';

const Categories = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');
  const [categoryProductType, setCategoryProductType] = useState('');
  const { getAllCategories, createCategory } = useCategories();

  useEffect(() => {
    getAllCategories()
      .then(({ data }) => {
        setRowData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const createNewCategory = () => {
    createCategory(categoryName, categoryProductType)
      .then((res) => {
        console.log(res);
        alert('category created successfully');
        setIsDialogOpen(false);
        getAllCategories()
          .then(({ data }) => setRowData(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
  };

  const ITEMS_PER_PAGE = 10;

  const initialData = [
    {
      id: 3,
      categoryName: 'Vegetable',
      productType: 'Tomato',
      totalProducts: '25',
      dateCreated: '25-7-2023',
      categoryId: '54',
      status: 'Active',
    },
    {
      id: 2,
      categoryName: 'Vegetable',
      productType: 'Tomato',
      totalProducts: '0',
      dateCreated: '25-7-2023',
      categoryId: '56',
      status: 'In Active',
    },
    {
      id: 2,
      categoryName: 'Vegetable',
      productType: 'Tomato',
      totalProducts: '10',
      dateCreated: '25-7-2023',
      categoryId: '58',
      status: 'Active',
    },
  ];

  const [rowData, setRowData] = useState(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCategory, setnewCategory] = useState({
    categoryName: '',
    categoryId: '',
    productType: '',
    dateCreated: '',
    totalProducts: '',
  });

  const gridOptions = {
    columnDefs: [
      {
        headerName: 'Category',
        field: 'name',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Category Id',
        field: 'id',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Total Products',
        field: 'total_products',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'product Type',
        field: 'product_type',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Date Created',
        field: 'date_created',
        sortable: true,
        filter: true,
        flex: 1,
        cellRenderer: (params) => new Date(params.value).toLocaleDateString(),
      },
      {
        headerName: 'Status',
        field: 'status',
        sortable: true,
        filter: true,
        flex: 1,
        cellClassRules: {
          active: (params) => params.value === 'Active',
          inactive: (params) => params.value === 'In Active',
        },
      },
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
    onRowClicked: (params) => {
      navigate(`/Category-Product/${params.data.id}`);
    },
  };

  const handleAddProduct = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveProduct = () => {
    const newCategoryWithDetails = {
      ...newCategory,
      status: 'Active',
    };

    setRowData([...rowData, newCategoryWithDetails]);
    setnewCategory({
      categoryName: '',
      categoryId: '',
      productType: '',
      dateCreated: '',
      totalProducts: '',
    });
    setIsDialogOpen(false);
  };

  const buttonStyle = {
    backgroundColor: '#10A760',
    color: '#fff',
  };

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

  return (
    <div className="product-categories p-4">
      <div className="d-flex justify-content-between align-items-center pc-head">
        <p className="productDetailsHeading">Products Categories</p>
        <Button
          variant="contained"
          onClick={handleAddProduct}
          className="add-btn"
          style={buttonStyle}
        >
          Add Category
        </Button>
      </div>

      <div
        className="ag-theme-alpine"
        style={{ width: '100%', margin: '10px 0', overflow: 'hidden' }}
      >
        <AgGridReact gridOptions={gridOptions} rowData={paginatedData} />
      </div>

      <Button
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
        className="border px-17 py-9 pg-btn"
      >
        Previous
      </Button>
      <Button
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
        className="mx-2 border px-17 py-9 pg-btn"
      >
        Next
      </Button>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        className="dialog"
      >
        <DialogTitle className="dialogTitle">Add Category</DialogTitle>
        <DialogContent className="d-flex flex-column dialogContent">
          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Category Name</p>
            <div className="inputField">
              <input
                label="Category Name"
                value={categoryName}
                onChange={updateField(setCategoryName)}
                placeholder="Enter Category Name"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Product Type</p>
            <div className="inputField">
              <input
                label="Product Type"
                value={categoryProductType}
                onChange={updateField(setCategoryProductType)}
                placeholder="Enter Product Type"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="dialogAction">
          <Button onClick={handleCloseDialog} className="border px-17 py-9">
            Discard
          </Button>
          <Button
            onClick={createNewCategory}
            color="primary"
            className="border px-17 py-9"
            style={buttonStyle}
          >
            Add Product
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Categories;
