import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import image from "./img/jewelryCover.jpg";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SingleProductDataAction } from "../Action/ProductAction";
import StarIcon from "@mui/icons-material/Star";
const ProductPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const singleProductData = useSelector(
    (state) => state.ProductReducer.SingleProductData.data
  );
  useEffect(() => {
    if (location.state) {
      dispatch(SingleProductDataAction(location.state));
    }
  }, []);
  console.log(singleProductData, "single");
  return (
    <Box>
      <Grid container>
        <Grid xs={8} md={6} lg={6} item>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Chip
              label={`${"Best Seller"}`}
              color="success"
              sx={{ mt: 1, mb: 1 }}
            />
            <img
              alt=""
              src={singleProductData.image}
              style={{
                width: "70%",
                height: "84vh",
                marginTop: "1px",
                position: "sticky",
                left: "20px",
                borderRadius: "20px",
              }}
            />
          </Box>
        </Grid>
        <Grid xs={4} md={6} lg={6} item>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" sx={{ color: "gray" }}>
              {singleProductData.title}
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              {`₹ ${singleProductData.price}`}
            </Typography>
            <Chip
              label={`${singleProductData?.rating?.rate} ✡`}
              color="secondary"
              sx={{ mt: 1, mb: 1 }}
            />
            <Box>
              <Typography>{singleProductData.description}</Typography>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" size="small" color="success">
                Buy Now
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                sx={{ ml: 3 }}
              >
                Add To Cart
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ProductPage;
