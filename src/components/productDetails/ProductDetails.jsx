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
import './productDetails.css';
import ViewDetailsButton from './ViewDetailsButton';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const { saveNewProduct, getAllProducts } = useProducts();

  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const ITEMS_PER_PAGE = 10;

  const initialData = [
    {
      id: 1,
      product: 'Product 1',
      buyingPrice: '100',
      quantity: '43 Packets',
      thresholdvalue: '12 Packets',
      expiryDate: '2023-12-31',
      availability: 'In Stock',
      details: 'View Details',
    },
    {
      id: 2,
      product: 'Product 2',
      buyingPrice: '150',
      quantity: '40 Packets',
      thresholdvalue: '10 Packets',
      expiryDate: '2023-11-30',
      availability: 'Out of Stock',
      details: 'View Details',
    },
    {
      id: 3,
      product: 'Product 3',
      buyingPrice: '180',
      quantity: '35 Packets',
      thresholdvalue: '8 Packets',
      expiryDate: '2023-11-30',
      availability: 'Low Stock',
      details: 'View Details',
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
        cellRenderer: (params) => {
          const date = new Date(params.value);
          return date.toLocaleDateString();
        },
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
    onRowClicked: (params) => navigate(`/product-info/${params.data.id}`),
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
      details: 'View Details',
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

    saveNewProduct(
      newProduct.product,
      newProduct.category,
      newProduct.buyingPrice,
      newProduct.quantity,
      newProduct.unit,
      newProduct.expiryDate,
      newProduct.thresholdvalue
    )
      .then((res) => {
        alert('Product created successfully');
        setIsDialogOpen(false);
      })
      .catch((err) => {
        alert('Error occured when creating the product');
        console.log(err);
      });
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
    <div>
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
        <AgGridReact gridOptions={gridOptions} rowData={products} />
      </div>

      {/* <Button
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
        className="border px-17 py-9 pg-btn"
      >
        Previous
      </Button>
      <Button onClick={onPageChange} className="mx-2 border px-17 py-9 pg-btn">
        Next
      </Button> */}

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
                value={newProduct.product}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, product: e.target.value })
                }
                placeholder="Enter Product Name"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Product Id</p>
            <div className="inputField">
              <input
                label="Product"
                value={newProduct.id}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, id: e.target.value })
                }
                placeholder="Enter Product Id"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Category</p>
            <div className="inputField">
              <input
                label="Product"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
                placeholder="Enter Product Category"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Buying Price</p>
            <div className="inputField">
              <input
                label="Buying Price"
                value={newProduct.buyingPrice}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, buyingPrice: e.target.value })
                }
                placeholder="Enter Buying Price"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Availability</p>
            <div className="inputField">
              <input
                label="Availability"
                value={newProduct.availability}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, availability: e.target.value })
                }
                placeholder="Enter Product Availability"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Quantity</p>
            <div className="inputField">
              <input
                label="Quantity"
                value={newProduct.quantity}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, quantity: e.target.value })
                }
                placeholder="Enter Product Quantity"
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Expiry Date</p>
            <div className="inputField">
              <input
                label="Expiry Date"
                type="date"
                value={newProduct.expiryDate}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, expiryDate: e.target.value })
                }
                placeholder=""
              />
            </div>
          </div>

          <div className="addItemField d-flex align-items-center justify-content-between">
            <p>Threshold Value</p>
            <div className="inputField">
              <input
                label="Expiry Date"
                value={newProduct.thresholdvalue}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    thresholdvalue: e.target.value,
                  })
                }
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
            onClick={handleSaveProduct}
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

export default ProductDetails;
