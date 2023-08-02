import axios from "axios";

function useProducts() {
  const token = localStorage.getItem("jwtoken");
  const getProductsWithPagination = (offset, end) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/products/getProductsWithPagination",
          { start: offset, end },
          { headers: { "x-auth-token": token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getBestSellingProducts = (offset, end) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/products/bestSellingProducts",
          { headers: { "x-auth-token": token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getAllProducts = (offset, end) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/products/getAllProducts",
          { headers: { "x-auth-token": token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getLowStockProducts = (offset, end) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/products/lowStockProducts",
          { headers: { "x-auth-token": token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getAllProductsReport = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/products/getAllProductsReport",
          { headers: { "x-auth-token": token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const saveNewProduct = (
    name,
    category,
    buying_price,
    quantity,
    unit,
    expiry_date,
    threshold_value
  ) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/products/newProduct",
          {
            name,
            category,
            buying_price,
            quantity,
            unit,
            expiry_date,
            threshold_value,
          },
          { headers: { "x-auth-token": token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getProductDetail = (productId) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          "http://localhost:8000/api/products/getProduct",
          { productId },
          { headers: { "x-auth-token": token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  return {
    getProductsWithPagination,
    getBestSellingProducts,
    getAllProducts,
    getAllProductsReport,
    getLowStockProducts,
    saveNewProduct,
    getProductDetail,
  };
}

export default useProducts;
