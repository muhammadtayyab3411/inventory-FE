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
import './productDetails.css';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import useCategories from '../../hooks/useCategories';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { saveNewProduct, getAllProducts } = useProducts();
  const { getAllCategories } = useCategories();

  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));

    getAllCategories()
      .then(({ data }) => {
        console.log('Categories', data);
        setCategories(data);
        if (data.length > 0) setSelectedCategory(data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  const ITEMS_PER_PAGE = 10;

  const updateField = (setter) => (event) => {
    setter(() => event.target.value);
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
        headerName: 'Buying Price ($)',
        field: 'buying_price',
        sortable: true,
        filter: true,
        flex: 1,
      },
      {
        headerName: 'Quantity (Packets)',
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
    onRowClicked: (params) => {
      console.log(params.data);
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
      selectedCategory,
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
              <select
                style={{ width: '100%', border: 'none', outline: 'none' }}
                className="inputField"
                name="category"
                id="category"
                value={selectedCategory}
                onChange={updateField(setSelectedCategory)}
              >
                {categories.map((category) => (
                  <option value={category.id}>{category.name}</option>
                ))}
              </select>
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
                placeholder="Buying Price in $"
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
                placeholder="No. of Products in Inventory"
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
