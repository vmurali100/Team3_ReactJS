import { GET_ALL_ALBUMS } from "./actionType"
import axios from 'axios'
export function getAlbumAction(album) {
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>{
           dispatch({
               type:GET_ALL_ALBUMS,
               payload:res.data
           })
        })
    }
}