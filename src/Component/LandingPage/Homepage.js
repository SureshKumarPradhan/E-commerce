import React, { useEffect, useRef } from "react";
import SliderComponent from "./Slider";
import { Categories } from "./Categories";
import {
  CategoryListAction,
  RecomandedListAction,
} from "../../Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import RecomandedProduct from "./RecomandedProduct";
const HomePage = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const RecomandedData = useSelector(
    (state) => state.ProductReducer.RecomandedData.data
  );

  console.log(RecomandedData, "RecomandedData");
  useEffect(() => {
    dispatch(CategoryListAction());
    dispatch(RecomandedListAction());

    //   console.log("ok")
  }, [dispatch]);

  return (
    <>
      <SliderComponent />
      <Categories />
      <RecomandedProduct data={RecomandedData} />
    </>
  );
};

export default HomePage;
