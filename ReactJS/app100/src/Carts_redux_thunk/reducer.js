import { GET_ALL_CARTS } from "./actionType";


const defaultState={
    carts:{}
}
const cartsReducer=(state=defaultState,action)=>{
switch (action.type) {
    case GET_ALL_CARTS:
        return action.payload
        
        

    default:
        return state.carts
}
}
export default cartsReducer