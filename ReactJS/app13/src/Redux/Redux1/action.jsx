import axios from 'axios'
import { GET_ALL_USER } from './actiontypes'
export function getAllUserAction() {
    //     axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
    //       console.log(res.data)
    //       return {
    //           type:GET_ALL_USER,
    //           payload:res.data
    //       }
    //   })
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            console.log(res.data)
            dispatch({

                type: GET_ALL_USER,
                payload: res.data

            })
        })
    }

}