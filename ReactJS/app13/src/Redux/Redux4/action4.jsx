import axios from 'axios'
import { GET_ALL_ALBUM } from './actiontype3'

export function getAllAlbums() {
    
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/albums").then(res => {
            console.log(res.data)
            dispatch({

                type: GET_ALL_ALBUM,
                payload: res.data

            })
        })
    }

}