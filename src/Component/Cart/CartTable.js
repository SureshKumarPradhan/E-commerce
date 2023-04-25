import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import image from "../../ShareModule/img/jewelleryRound.jpg";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { increment, decrement,removeCart } from "../../Reducer/RootReducer";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const CartTable = ({ cartData }) => {
  const dispatch = useDispatch();

  const incrementQuantity = (id) => {
    dispatch(increment(id));
  };
  const decrementQuantity = (id) => {
    dispatch(decrement(id));
  };
  const handleRemove = (id) => {
    dispatch(removeCart(id))
  }

  return (
    <Box sx={{ display: "flex", m: 1 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell width={"400px"}>Description</TableCell>
              {/* <TableCell align="right">Size</TableCell> */}
              <TableCell align="left" width={"100px"}>
                Quantity
              </TableCell>
              <TableCell align="left" width={"100px"}>
                Remove
              </TableCell>
              <TableCell align="center" width={"100px"}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartData.length > 0 &&
              cartData.map((ele) => (
                <TableRow
                  key={ele.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: "flex" }}>
                      <img
                        alt=""
                        src={ele.image}
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography
                          variant="p"
                          sx={{ fontSize: "15px", color: "#1a1a1d" }}
                        >
                          {ele.title}
                        </Typography>
                        <br />
                        <Typography
                          variant="p"
                          sx={{ fontSize: "10px", color: "#1a1a1d" }}
                        >
                          {`Product Code ${ele.id}`}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  {/* <TableCell align="right">{row.calories}</TableCell> */}
                  <TableCell align="left">
                    <Box sx={{ display: "flex" }}>
                      <button
                        style={{ outline: "none" }}
                        onClick={() => incrementQuantity(ele.id)}
                        
                      >
                        +
                      </button>
                      <input
                        type="text"
                        value={ele.quantity}
                        style={{ width: "30px", textAlign: "center" }}
                        readOnly
                      />
                      <button
                        style={{ outline: "none" }}
                        onClick={() => decrementQuantity(ele.id)}
                        disabled={ele.quantity > 1 ? false : true}
                      >
                        -
                      </button>
                    </Box>
                  </TableCell>
                  <TableCell align="left">
                    <Button variant="contained" color="error" size="small" onClick={()=>handleRemove(ele.id)}>
                      Remove
                    </Button>
                  </TableCell>
                  <TableCell align="center">{`${ele.price}`}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Box>
  );
};

export default CartTable;
