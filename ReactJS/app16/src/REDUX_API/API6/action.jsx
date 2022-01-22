import axios from "axios"
import { GET_ALL_POSTS } from "./actionType"

export function getAllPostsAction(){
    return (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data)
            dispatch({
                type:GET_ALL_POSTS,
                payload:res.data
            })
        })
    }
}