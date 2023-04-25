import { Box, Grid, Typography,Button } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Singlecart from "./CartTable";
const Cart = () => {
  const dispatch = useDispatch();
  const CartList = useSelector((state) => state.ProductReducer.CartData.data);
  console.log(CartList, "Cartlist");
  useEffect(() => {
   
  }, [dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
      }}
    >
      <Box sx={{ width: "70vw", mt: 2 }}>
        <Typography sx={{ textAlign: "center" }}>My Cart List's</Typography>
        <Box sx={{ width: "100%" , mt: 1 }}>
          <Singlecart cartData = {CartList} />
          <Typography sx={{ml:1}}>Total - {CartList.reduce((acc, obj) => acc + obj.price, 0)}</Typography>
         {CartList.length > 1 && <Button variant="contained" color='success' size="small" sx={{float:'right',mr:.7,mt:1}}>Buy Now</Button>}
        </Box>
      </Box>
    </Box>
  );
};
export default Cart;
