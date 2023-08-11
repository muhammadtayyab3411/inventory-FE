import axios from 'axios';

function useCategories() {
  const token = localStorage.getItem('jwtoken');

  const getAllCategories = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get('http://localhost:8000/api/categories/', {
          headers: { 'x-auth-token': token },
        });
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const createCategory = (name, product_type) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          'http://localhost:8000/api/categories',
          {
            name,
            product_type,
          },
          { headers: { 'x-auth-token': token } }
        );

        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  const createProductInCategory = (
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
          'http://localhost:8000/api/categories/createProduct',
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

  const getProductsWithCategory = (category) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(
          'http://localhost:8000/api/categories/getProductsWithCategory',
          {
            category,
          },
          { headers: { 'x-auth-token': token } }
        );

        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  return {
    getAllCategories,
    createCategory,
    createProductInCategory,
    getProductsWithCategory,
  };
}

export default useCategories;
