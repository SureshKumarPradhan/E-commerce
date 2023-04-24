import React,{useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { ProductListAction } from '../../Action/ProductAction';
import RecomandedProduct from '../LandingPage/RecomandedProduct';
const  AllProduct = () => {
    const dispatch = useDispatch()
    const ProductList = useSelector(state=>state.ProductReducer.ProductListData.data)
    const isFilter = useSelector(state=>state.ProductReducer.ProductListData.isFilter)
    const filterData = useSelector(state=>state.ProductReducer.ProductListData.filterData)
    
    useEffect(()=>{
    dispatch(ProductListAction())
    },[dispatch])
    console.log(filterData,"filterData")
    return (
        <>
        
<RecomandedProduct data = {filterData.length > 0 ? filterData:ProductList} component={"Product_List"}/>
        </>
    )
}
export default AllProduct;