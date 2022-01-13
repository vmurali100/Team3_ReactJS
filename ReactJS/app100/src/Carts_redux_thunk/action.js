import axios from "axios"
import { GET_ALL_CARTS } from "./actionType"

export function getAllCartsAction(cart) {
    return(dispatch)=>{
        axios.get("https://fakestoreapi.com/carts").then((res)=>{
           dispatch({
               type:GET_ALL_CARTS,
               payload:res.data
           })
        })
    }
}