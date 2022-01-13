import axios from 'axios'
import { GET_ALL_COMMENTS } from './actiontype5'

export function getAllCommentsAction() {
    
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
            console.log(res.data)
            dispatch({

                type:GET_ALL_COMMENTS ,
                payload: res.data

            })
        })
    }

}