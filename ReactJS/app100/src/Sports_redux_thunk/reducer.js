import { GET_ALL_SPORTS } from "./actionType";

const defaultState={
    sports:{}
}
const sportsReducer=(state=defaultState,action)=>{
 switch (action.type) {
     case GET_ALL_SPORTS:
         return action.payload
        
 
     default:
         return state.sports
 }
}
export default sportsReducer