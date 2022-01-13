import { bindActionCreators } from "redux";
import { GET_ALL_PRODUCTS } from "./actionType";

const defaultState={
    products:{}
}
const productsReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return action.payload
            
        
    
        default:
            return state.products
    }
}
export default productsReducer