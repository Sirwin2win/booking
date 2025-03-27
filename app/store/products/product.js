// import { create } from 'zustand';
// import axios from 'axios';



// const API_URL = 'https://node-booking.onrender.com/api/products';
// // const API_URL = 'https://node-furniture.onrender.com/api/products';



// const createProduct = async (productData) => {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'multipart/form-data',
//     },
//   }
//   const response = await axios.post(API_URL, productData, config)
//   return response.data
// }

// async function fetchData() {
//   const res = await axios.get(`https://node-booking.onrender.com/api/products`);
//   return res.data;
// }
// // async function fetchData() {
// //   const result = await fetch("https://node-booking.onrender.com/api/products");
// //   const response = await result.json();
// //   return response;
// // }

// const res =await fetchData()
// // const prod = createProduct()
// export const useProductStore = create((set) => ({
//   products:res,
//   // products:res,
//   createInfo:createProduct,

// //   createInfo:async (productData) => {
// //     const product = await createProduct(productData);
// //     return set(state => ({
// //         ...state,
// //         products: [...state.products, product]
// //     }));
// // },
// }));