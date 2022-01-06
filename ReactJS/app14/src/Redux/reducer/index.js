import { combineReducers } from "redux";
import rootReducer1 from "../../Redux1/reducer";
import rootReducer2 from "../../Redux2/reducer";
import rootReducer3 from "../../Redux3/reducer";
import rootReducer4 from "../../Redux4/reducer";


const defaultData = {
    Users: ["lokesh", "chandu", "hareesh", "abhi"],
    Products: ["computers", "laptops", "mobiles", "smart phones"],
    States: ["Andhra Pradesh", "Tamilnadu", "Karnataka", "kerala", "Goa"],
    Images:
        <img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt="" width="250px"></img>
}

 function rootReducer(state = defaultData, actions) {
    switch (actions.type) {
        case "Get_All_STUDENTS":
            return state.Users;

        case "Get_All_PRODUCTS":
            return state.Products;

        case "Get_All_States":
            return state.States;

        case "Get_All_Images":
            return state.Images


        default:
            return state;
    }
}
const allReducers=combineReducers({
    newReducer:rootReducer,
    newReducer1:rootReducer1,
    newReducer2:rootReducer2,
    newReducer3:rootReducer3,
    newReducer4:rootReducer4

})
export default allReducers