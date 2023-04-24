import { Box,Grid } from '@mui/material';
import React ,{useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getCartList } from '../../Action/ProductAction';
import Singlecart from './Singlecart';
const Cart = () => {
    const dispatch = useDispatch()
    const CartList = useSelector(state=>state.ProductReducer.CartData.data)
    console.log(CartList,"Cartlist")
useEffect(()=>{
 dispatch(getCartList())
},[dispatch])
    return(
        <Box sx={{display:'flex', justifyContent:'center'}}>
        <Box sx={{minWidth:'70vw',backgroundColor:'lightseagreen',mt:1}}>
     <Singlecart/>
        </Box>
        </Box>
    )
}
export default Cart;