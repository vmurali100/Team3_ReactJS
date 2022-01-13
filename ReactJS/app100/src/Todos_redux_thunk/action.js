import axios from "axios"
import { GET_ALL_TODOS } from "./actionType"

export function getAllTodosActions(todo) {
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            dispatch({
                type:GET_ALL_TODOS,
                payload:res.data
            })
        })
    }
}