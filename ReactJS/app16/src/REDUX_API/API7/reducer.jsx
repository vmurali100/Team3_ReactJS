import { GET_ALL_PRODUCTS } from "./actionType";

const defaultState={
    products:{}
}
function reducerProduct(state=defaultState,action){
    switch (action.type) {
        case GET_ALL_PRODUCTS:
           break; 
    
        default:
            return state.products;
    }
}
export default reducerProduct