import React from "react";
import { Box,Typography } from "@mui/material";

const Footer = () => {
    return(
        <>
 <Box sx={{backgroundColor:'#21263c',zIndex:'10000',width:'100%'}}>
          <Typography style={{textAlign:'center',padding:'6px',fontSize:'12px',color:'#fff'}}>Copyright © E-commerce Demo 2022</Typography>
        </Box>
        </>
    )
}
export default Footer;
