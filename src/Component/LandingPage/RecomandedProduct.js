import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";

const RecomandedProduct = ({ data,component }) => {
  const navigate = useNavigate()
  const openProductPage = (id) => {
    navigate('/product_Page',{ state:id })
  }
  return (
    <Box sx={{ mt: 3 }}>
      <Typography
        sx={{ textAlign: "center", fontSize: "20px", fontFamily: "serif" }}
      >
      {component === "Product_List" ? "Product List Item's" :  "Recomanded Items"}
      </Typography>
      <hr
        style={{
          width: "13%",
          height: "1px",
          backgroundColor: "gray",
          border: "none",
          margin: "2px auto",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 3,
        }}
      >
        {data.length > 0 &&
          data.map((ele, index) => (
            <Card
            key={index  }
              raised
              sx={{
                maxWidth: 345,
                m: 3,
                position: "relative",
                minHeight:'430px'
              }}
            > 
            <Typography component="legend" sx={{float:'right'}}>{ele?.rating?.rate} </Typography>
             <Rating name="half-rating" precision={0.5}  defaultValue={ele?.rating?.rate} max={5} sx={{float:'right'}} readOnly />
              <CardMedia
                component="img"
                alt={ele.image}
                height="200"
                image={ele.image}
                sx={{ objectFit: "contain",ml:-.5,mt:.5 }}
              />
              <CardContent>
              <Tooltip title={ele.title}>
                <Typography gutterBottom variant="p" onClick={()=>openProductPage(ele.id)} sx={{ fontSize: "15px",cursor:'pointer' 
                }}>
                  
                  {ele?.title?.length > 35
                    ? ele.title.slice(0, 35) + "...."
                    : ele.title}
                </Typography>
              </Tooltip>
              <Typography variant="h6" sx={{ mt: 1 }}>
              {
              `₹ ${ele.price}` }
            </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, height: "100px" }}
                >
                  {ele.description.length > 150
                    ? ele.description.slice(0, 150) + "...."
                    : ele.description}
                </Typography>
              </CardContent>
              <CardActions sx={{mt:-3,}}>
                <Button size="small" variant="outlined">Buy Now</Button>
                <Button size="small" variant="outlined">Add to Cart</Button>
              </CardActions>
            </Card>
          ))}
      </Box>
    </Box>
  );
};
export default RecomandedProduct;
