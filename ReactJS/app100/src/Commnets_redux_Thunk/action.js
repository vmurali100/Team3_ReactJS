import axios from "axios"
import { GET_ALL_COMMENTS } from "./ActionType"

export function getAllCommentsAction() {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
            dispatch({
                type: GET_ALL_COMMENTS,
                payload: res.data
            })
        })
    }
}