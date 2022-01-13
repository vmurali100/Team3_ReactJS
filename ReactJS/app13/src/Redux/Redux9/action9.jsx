import axios from 'axios'
import { GET_ALL_PRODUCTS } from './actiontype9'

export function getAllProducts() {
    
    return (dispatch) => {
        axios.get("https://fakestoreapi.com/products").then(res => {
            console.log(res.data)
            dispatch({

                type: GET_ALL_PRODUCTS,
                payload: res.data

            })
        })
    }

}