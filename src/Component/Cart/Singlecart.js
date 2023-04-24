import { Box, Typography } from "@mui/material";
import React from "react";
import image  from '../../ShareModule/img/jewelleryRound.jpg'

const Singlecart = () => {
    return(
        <Box sx={{display:'flex',m:1,}}>
        <img alt="" src={image} style={{width:'80px',height:'80px'}}/>
        <Box sx={{ml:3,mt:2}}>
        <Typography sx={{color:'#1a1a1d'}}>asjkdnas zxvdfes sdfsdf sdgfdsfsdg sdgs</Typography>
        <p  style={{fontSize:'10px',color:'#1a1a1d'}}>10/11/2121</p>
        </Box>
        <Typography variant="h6" sx={{ mt: 3,ml:5}}>
              {
              `₹ ${'123123'}` }
            </Typography>
        </Box>
    )
}

export default Singlecart;