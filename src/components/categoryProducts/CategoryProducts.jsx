import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@material-ui/core';
import './categoryProducts.css';
import { useNavigate } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';
import useProducts from '../../hooks/useProducts';

const CategoryProducts = ({ categoryId }) => {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productBuyingPrice, setProductBuyingPrice] = useState('');
  const [productExpiryDate, setProductExpiryDate] = useState('');
  const [productThresholdValue, setProductThresholdValue] = useState('');
  const [productUnit, setProductUnit] = useState('');
  const navigate = useNavigate();
  const { getProductsWithCategory } = useCategories();
  const { saveNewProduct } = useProducts();
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    getProductsWithCategory(categoryId)
      .then(({ data }) => setRowData(data))
      .catch((err) => console.log(err));
  }, []);

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
  };

  const createNewProduct = () => {
    saveNewProduct(
      productName,
      categoryId,
      productBuyingPrice,
      productQuantity,
      productUnit,
      productExpiryDate,
      productThresholdValue
    )
      .then((res) => {
        alert('Product created successfully');
        setIsDialogOpen(false);
        getProductsWithCategory(categoryId)
          .then(({ data }) => setRowData(data))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const initialData = [
    {
      id: 1,
      product: 'Product 1',
      buyingPrice: '100',
      quantity: '43 Packets',
      thresholdvalue: '12 Packets',
      expiryDate: '2023-12-31',
      availability: 'In Stock',
    },
    {
      id: 2,
      product: 'Product 2',
      buyingPrice: '150',
      quantity: '40 Packets',
      thresholdvalue: '10 Packets',
      expiryDate: '2023-11-30',
      availability: 'Out of Stock',
    },
    {
      id: 3,
      product: 'Product 3',
      buyingPrice: '180',
      quantity: '35 Packets',
      thresholdvalue: '8 Packets',
      expiryDate: '2023-11-30',
      availability: 'Low Stock',
    },
  ];

  const [rowData, setRowData] = useState(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    product: '',
    buyingPrice: '',
    quantity: '',
    expiryDate: '',
    availability: '',
    details: '',
    imageFile: null,
    id: '',
    category: '',
    unit: '',
    details: '',
    thresholdvalue: '',
  });

  const gridOptions = {
    columnDefs: [
      {
        headerName: 'Product',
        field: 'name',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Buying Price',
        field: 'buying_price',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Quantity',
        field: 'quantity',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Threshold Value',
        field: 'threshold_value',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Expiry Date',
        field: 'expiry_date',
        sortable: true,
        filter: true,
        flex: 1,
        cellRenderer: (params) => new Date(params.value).toLocaleDateString(),
      },
      {
        headerName: 'Availability',
        field: 'quantity',
        sortable: true,
        filter: true,
        flex: 1,
        cellClassRules: {
          inStock: (params) => params.value > 5,
          outOfStock: (params) => params.value < 3,
          lowStock: (params) => params.value < 5 && params.value > 3,
        },
        cellRenderer: (params) => {
          if (params.value > 5) return 'In Stock';
          else if (params.value < 3) return 'Out of Stock';
          else if (params.value < 5 && params.value > 3) return 'Low Stock';
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
      navigate(`/product-info/${params.data.id}`);
    },
  };

  const handleAddProduct = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveProduct = () => {
    const newProductWithDetails = {
      ...newProduct,
    };

    setRowData([...rowData, newProductWithDetails]);
    setNewProduct({
      product: '',
      buyingPrice: '',
      quantity: '',
      expiryDate: '',
      availability: '',
      details: '',
      imageFile: null,
      id: '',
      category: '',
      unit: '',
      thresholdvalue: '',
    });
    setIsDialogOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({ ...newProduct, imageFile: file });
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
    <div className="category-product p-4">
      <div className="d-flex justify-content-between align-items-center">
        <p className="productDetailsHeading">Products</p>
        <Button
          variant="contained"
          onClick={handleAddProduct}
          className="add-btn"
          style={buttonStyle}
        >
          Add Product
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
        <DialogTitle className="dialogTitle">Add Product</DialogTitle>
        <DialogContent className="d-flex flex-column dialogContent">
          <div className="addItemField img-upload d-flex align-items-center justify-content-between">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              placeholder="Upload Product Image"
            />
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Product Name</p>
            <div className="inputField">
              <input
                label="Product"
                value={productName}
                onChange={updateField(setProductName)}
                placeholder="Enter Product Name"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Buying Price</p>
            <div className="inputField">
              <input
                label="Buying Price"
                value={productBuyingPrice}
                onChange={updateField(setProductBuyingPrice)}
                placeholder="Enter Buying Price"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Quantity</p>
            <div className="inputField">
              <input
                label="Quantity"
                value={productQuantity}
                onChange={updateField(setProductQuantity)}
                placeholder="Enter Product Quantity"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Unit</p>
            <div className="inputField">
              <input
                label="Unit"
                type="text"
                value={productUnit}
                onChange={updateField(setProductUnit)}
                placeholder=""
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Expiry Date</p>
            <div className="inputField">
              <input
                label="Expiry Date"
                value={productExpiryDate}
                onChange={updateField(setProductExpiryDate)}
                placeholder="Enter expiry date value"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Threshold Value</p>
            <div className="inputField">
              <input
                label="Threshold Value"
                value={productThresholdValue}
                onChange={updateField(setProductThresholdValue)}
                placeholder="Enter threshold value"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions className="dialogAction">
          <Button onClick={handleCloseDialog} className="border px-17 py-9">
            Discard
          </Button>
          <Button
            onClick={createNewProduct}
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

export default CategoryProducts;
