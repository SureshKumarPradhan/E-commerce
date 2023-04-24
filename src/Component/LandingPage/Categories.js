import { Typography,Box } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ElectronicRound from '../../ShareModule/img/electronicsRound.jpg'
import JewlleryRound from '../../ShareModule/img/jewelleryRound.jpg'
import menFashionRound from '../../ShareModule/img/menFashionRound.png'
import WomenFashionRound from '../../ShareModule/img/womenFashionRound.jpg'

export const Categories = () => {
    return(
        <Box sx={{mt:2}}>
        <Typography sx={{textAlign:'center',fontSize:'20px', fontFamily:'serif'}} >Catagories</Typography>
        <hr style={{ 
        width: '8%', 
        height: '1px', 
        backgroundColor: 'gray', 
        border: 'none', 
        margin: '2px auto' 
      }} />

<Stack direction="row" spacing={5} sx={{display:'flex',justifyContent:'center',mt:4}}>
      <Avatar alt="" src= {ElectronicRound} style={{ height: '80px', width: '80px',cursor:'pointer' }} />
      <Avatar alt="" src={JewlleryRound} style={{ height: '80px', width: '80px',cursor:'pointer' }}/>
      <Avatar alt="" src={menFashionRound} style={{ height: '80px', width: '80px',cursor:'pointer' }}/>
      <Avatar alt="" src={WomenFashionRound} style={{ height: '80px', width: '80px',cursor:'pointer' }}/>
    </Stack>
        </Box>
    )
}
