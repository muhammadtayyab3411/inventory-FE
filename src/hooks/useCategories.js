import axios from 'axios';

function useCategories() {
  const token = localStorage.getItem('jwtoken');
  const apiURL = 'https://lime-crowded-foal.cyclic.app';

  const getAllCategories = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${apiURL}/api/categories/`, {
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
          `${apiURL}/api/categories`,
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
          `${apiURL}/api/categories/createProduct`,
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
          `${apiURL}/api/categories/getProductsWithCategory`,
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
