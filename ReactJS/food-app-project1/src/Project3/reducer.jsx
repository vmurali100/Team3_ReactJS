import { ADD_DISTRICTS, DELETE_DISTRICTS, GET_ALL_DISTRICTS, UPDATE_CONSTITUENCIES, UPDATE_DISTRICTS } from "./actionTypes";

 const rootReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_DISTRICTS:
            return action.payload

        case ADD_DISTRICTS:
            return state

        case DELETE_DISTRICTS:
            return state

        case UPDATE_DISTRICTS:
            return state
         
        case UPDATE_CONSTITUENCIES:
            return action.payload
        default:
            return state;
    }
}
export default rootReducer