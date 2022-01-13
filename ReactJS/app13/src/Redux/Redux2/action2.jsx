import axios from "axios";
import { GET_ALL_TODOS } from "./actionTypes";

export function getAllTodos(todos) {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>
    // {
    //     console.log(res.data)
    //     return {
    //         type:GET_ALL_TODOS,
    //         payload:res.data
    //     }
    // })
   return (dispatch)=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
        console.log(res.data)
        dispatch({
            type:GET_ALL_TODOS,
            payload:res.data
        })
    })
   }
}