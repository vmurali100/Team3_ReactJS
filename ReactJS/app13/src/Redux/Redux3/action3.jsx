import axios from 'axios'
import { GET_ALL_PHOTOS } from './actiontype3'

export function getAllPhotos() {
    
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
            console.log(res.data)
            dispatch({

                type: GET_ALL_PHOTOS,
                payload: res.data

            })
        })
    }

}