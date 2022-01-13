import axios from "axios"
import { GET_ALL_PRODUCTS } from "./actionType"

export function getAllProductsAction() {
    return(dispatch)=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            dispatch({
                type:GET_ALL_PRODUCTS,
                payload:res.data
            })
        })
    }
}