

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 
export const CategoryListAction = createAsyncThunk('Product/CategoryListAction', async (page,{ rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/categories`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const RecomandedListAction = createAsyncThunk('Product/RecomandedListAction', async (page,{ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })

  export const SingleProductDataAction = createAsyncThunk('Product/SingleProductDataAction', async (id,{ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })

  export const ProductListAction = createAsyncThunk('Product/ProductListAction', async (page,{ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })

  export const getProductByCategory = createAsyncThunk('Product/getProductByCategory', async (category,{ rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })

  // export const getCartList = createAsyncThunk('Product/getCartList', async (page,{ rejectWithValue }) => {
  //   try {
  //     const { data } = await axios.get(`https://fakestoreapi.com/carts`);
  //     return data;
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // })