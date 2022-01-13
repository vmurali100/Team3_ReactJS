import { GET_ALL_COMMENTS } from "./ActionType"

const defaultState={
    comments:{}
}
const commentsReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case GET_ALL_COMMENTS:
            return action.payload
           
        default:
            return state.comments
    }
}
export default commentsReducer