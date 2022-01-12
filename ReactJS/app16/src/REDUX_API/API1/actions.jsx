import { GET_ALL_USERS } from "./actionTypes";
import axios from 'axios';

export function getAllUsersAction() {
    // axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
    //     console.log(res.data)
    //     return {
    //         type: GET_ALL_USERS,
    //         payload: res.data
    //     }
    // })
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res.data)
        dispatch({
            type:GET_ALL_USERS,
            payload:res.data
        })
    })
    }

}