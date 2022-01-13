import axios from "axios";
import { GET_ALL_PHOTOS } from "./actionType";

export function getAllPhotosAction(photo) {
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>{
         dispatch({
           type:GET_ALL_PHOTOS,
           payload:res.data
         })
        })
    }
}
