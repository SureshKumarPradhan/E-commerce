import { createSlice } from "@reduxjs/toolkit";
import {
  CategoryListAction,
  RecomandedListAction,
  SingleProductDataAction,
  ProductListAction,
  getProductByCategory,
} from "../Action/ProductAction";
const initialState = {
  CategoryData: {
    data: [],
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
  RecomandedData: {
    data: [],
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
  SingleProductData: {
    data: {},
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
  ProductListData: {
    data: [],
    filterData: [],
    isFilter: false,
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
  CartData: {
    data: [],
    isFilter: false,
    isLoading: false,
    isSucess: false,
    errorMessage: "",
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setIsfilter: (state, action) => {
      state.ProductListData.isFilter = action.payload;
    },
    filterProduct: (state, action) => {
      state.ProductListData.filterData =
        state.ProductListData.filterData.filter(
          (ele) => ele.category !== action.payload
        );
    },
    addToCart: (state, action) => {
      if (state.CartData.data.some((item) => item.id === action.payload.id)) {
        state.CartData.data = state.CartData.data.map((ele) =>
          ele.id === action.payload.id
            ? {
                ...action.payload,
                quantity: ele.quantity + 1,
                price: (ele.quantity + 1) * ele.realPrice,
              }
            : { ...ele }
        );
      } else {
        state.CartData.data.push({
          ...action.payload,
          quantity: 1,
          realPrice: action.payload.price,
        });
      }
    },
    increment: (state, action) => {
      const updateCartList = state.CartData.data.map((ele) => {
        if (ele.id === action.payload) {
          return {
            ...ele,
            quantity: ele.quantity + 1,
            price: (ele.quantity + 1) * ele.realPrice,
          };
        } else {
          return { ...ele };
        }
      });

      state.CartData.data = updateCartList;
    },
    decrement: (state, action) => {
      const updateCartList = state.CartData.data.map((ele) => {
        if (ele.id === action.payload) {
          return {
            ...ele,
            quantity: ele.quantity - 1,
            price: (ele.quantity - 1) * ele.realPrice,
          };
        } else {
          return { ...ele };
        }
      });

      state.CartData.data = updateCartList;
    },
    removeCart: (state, action) => {
      state.CartData.data = state.CartData.data.filter(
        (ele) => ele.id !== action.payload
      );
    },
  },
  extraReducers: {
    [CategoryListAction.fulfilled]: (state, { payload }) => {
      state.CategoryData.isLoading = false;
      state.CategoryData.isSucess = true;
      state.CategoryData.data = payload;
    },
    [CategoryListAction.rejected]: (state, { payload }) => {
      state.CategoryData.isLoading = false;
      state.CategoryData.isSucess = false;
      state.CategoryData.errorMessage = payload;
    },
    [RecomandedListAction.fulfilled]: (state, { payload }) => {
      state.RecomandedData.isLoading = false;
      state.RecomandedData.isSucess = true;
      state.RecomandedData.data = payload.slice(0, 6);
    },
    [RecomandedListAction.rejected]: (state, { payload }) => {
      state.RecomandedData.isLoading = false;
      state.RecomandedData.isSucess = false;
      state.RecomandedData.errorMessage = payload;
    },
    [SingleProductDataAction.fulfilled]: (state, { payload }) => {
      state.SingleProductData.isLoading = false;
      state.SingleProductData.isSucess = true;
      state.SingleProductData.data = payload;
    },
    [SingleProductDataAction.rejected]: (state, { payload }) => {
      state.SingleProductData.isLoading = false;
      state.SingleProductData.isSucess = false;
      state.SingleProductData.errorMessage = payload;
    },
    [ProductListAction.fulfilled]: (state, { payload }) => {
      state.ProductListData.isLoading = false;
      state.ProductListData.isSucess = true;
      state.ProductListData.data = payload;
    },
    [ProductListAction.rejected]: (state, { payload }) => {
      state.ProductListData.isLoading = false;
      state.ProductListData.isSucess = false;
      state.ProductListData.ProductListData = payload;
    },
    [getProductByCategory.fulfilled]: (state, { payload }) => {
      state.ProductListData.isLoading = false;
      state.ProductListData.isSucess = true;
      state.ProductListData.filterData = [
        ...state.ProductListData.filterData,
        ...payload,
      ];
    },
    // [getCartList.rejected]: (state, { payload }) => {
    //   state.CartData.isLoading = false;
    //   state.CartData.isSucess = false;
    //   state.CartData.ProductListData = payload
    // },
    // [getCartList.fulfilled]: (state, { payload }) => {
    //   state.CartData.isLoading = false;
    //   state.CartData.isSucess = true;
    //   state.CartData.data =  payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsfilter,
  filterProduct,
  addToCart,
  increment,
  decrement,
  removeCart,
} = productSlice.actions;

export default productSlice.reducer;

// getCartList
