import axios from 'axios'
import { GET_ALL_CARTS } from './actiontype8'

export function getAllCartsAction() {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
    //       console.log(res.data)
    //       return {
    //           type:GET_ALL_USER,
    //           payload:res.data
    //       }
    //   })
    return (dispatch) => {
        axios.get("https://fakestoreapi.com/carts").then(res => {
            console.log(res.data)
            dispatch({

                type: GET_ALL_CARTS,
                payload: res.data

            })
        })
    }

}