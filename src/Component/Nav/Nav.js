import React ,{useState,useEffect}from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';
import { CategoryListAction,getProductByCategory } from "../../Action/ProductAction";
import { setIsfilter,filterProduct } from "../../Reducer/RootReducer";
const Nav = () => {
  const dispatch = useDispatch()
  const categoryList = useSelector(state=>state.ProductReducer.CategoryData.data)
  const CartList = useSelector((state) => state.ProductReducer.CartData.data);
  const [openCategory,setOpenCategory] = useState(false)
  const [catList,setCatList] = useState(categoryList)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(CategoryListAction())
  },[])
  const handleCategory =() => {
    setOpenCategory(!openCategory)
  }
  const filterCatagory = (e,category) => {
  if(e.target.checked){
    dispatch(getProductByCategory(category))
    dispatch(setIsfilter(true))
  }else{
    dispatch(filterProduct(category))
  }
  }
  return (
    <>
      <Box
        sx={{
          width: "auto",
          minHeight: "10vh",
          position:'sticky',
          top:'0',
          zIndex:'1',
          backgroundColor: "#21263c !important",
        }}
      >
        <Grid container>
          <Grid xs={0} md={7} lg={8} item></Grid>
          <Grid xs={12} md={5} lg={4} item >
            <Box sx={{ display: "flex",justifyContent:'space-between',width:'96%',position:'relative', mt:-.6}}>
              <Box sx={{ display: "flex", alignItems: "flex-end", mt: 3 }}>
                <SearchIcon
                  sx={{ color: "#fff", mr: 1, my: 0.1, fontSize: "2p5x" }}
                />
                <TextField
                  id="input-with-sx"
                  placeholder="Search Product"
                  variant="standard"
                  sx={{}}
                  InputProps={{
                    style: {
                      color: "#fff",
                      border: "1px solid #fff",
                      fontSize:'12px'
                    },
                  }}
                  InputLabelProps={{
                    style: { color: "#fff", marginLeft: "10px" ,fontSize:'12px'},
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{ color: "#fff", mt: 3, cursor: "pointer",fontSize:'15px' }}
                onClick={()=>{navigate('/product_List')}}
                >
                  All Product
                </Typography>
              </Box>
              <Box sx={{position:'relative'}}>
                <Typography
                  sx={{ color: "#fff", mt: 3, cursor: "pointer",fontSize:'15px' }}
                  onClick={handleCategory}
                >
                  Catagory
                </Typography>
                {openCategory && 
                <Box sx={{width:'150px',height:'auto',backgroundColor:'#21263c',position:'absolute',top:'69px',p:2,left:'-60px'}}>
                {
                  categoryList.length > 0 && categoryList.map(ele=>(
                   <Box sx={{zIndex:'1',display:'flex'}}>
                   <Checkbox onChange={(e)=>filterCatagory(e,ele)}/>
                   <Typography sx={{color:'#fff',mt:1}}>{ele}</Typography>
                   </Box>
                  ))
                }
                </Box>
                }
              </Box>
              <Box onClick={()=>navigate('/cart')}>
                <Badge badgeContent={CartList.length} sx={{color:'#fff',mt: 3, cursor: "pointer",fontSize:'15px'}} color="primary">
                  <AddShoppingCartIcon sx={{fontSize:'25px'}} />
                </Badge>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Nav;
