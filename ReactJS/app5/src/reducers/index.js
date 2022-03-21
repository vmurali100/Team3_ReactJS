import { GET_ALL_USERS } from "../actions/actionType"

export function rootReducer(state,action){
    switch (action.type) {
        case GET_ALL_USERS:
            
            return state
    
        default:
           return state
    }
}