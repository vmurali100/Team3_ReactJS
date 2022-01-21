import { GET_ALL_COMMENTS } from "./actionType";

const defaultState={
    comments:{}
}
function ReducerComments(state=defaultState,action){
    switch (action.type) {
        case GET_ALL_COMMENTS:
            
            return action.payload;
    
        default:
            return defaultState;
    }
}
export default ReducerComments