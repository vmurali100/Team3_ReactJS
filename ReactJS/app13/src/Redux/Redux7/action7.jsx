import axios from 'axios'
import { GET_ALL_USERSTORE } from './actiontype7'

export function getAllUserStoreAction() {
    
    return (dispatch) => {
        axios.get("https://fakestoreapi.com/users").then(res => {
            console.log(res.data)
            dispatch({

                type: GET_ALL_USERSTORE,
                payload: res.data

            })
        })
    }

}