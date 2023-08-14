import axios from 'axios';

function useProducts() {
  const token = localStorage.getItem('jwtoken');
  const apiURL = 'https://lime-crowded-foal.cyclic.app';

  const getProductsWithPagination = (offset, end) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          `${apiURL}/api/products/getProductsWithPagination`,
          { start: offset, end },
          { headers: { 'x-auth-token': token } }
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
          `${apiURL}/api/products/bestSellingProducts`,
          { headers: { 'x-auth-token': token } }
        );
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getAllProducts = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${apiURL}/api/products/getAllProducts`, {
          headers: { 'x-auth-token': token },
        });
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getLowStockProducts = (offset, end) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${apiURL}/api/products/lowStockProducts`, {
          headers: { 'x-auth-token': token },
        });
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
          `${apiURL}/api/products/getAllProductsReport`,
          { headers: { 'x-auth-token': token } }
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
          `${apiURL}/api/products/newProduct`,
          {
            name,
            category,
            buying_price,
            quantity,
            unit,
            expiry_date,
            threshold_value,
          },
          { headers: { 'x-auth-token': token } }
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
          `${apiURL}/api/products/getProduct`,
          { productId },
          { headers: { 'x-auth-token': token } }
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
