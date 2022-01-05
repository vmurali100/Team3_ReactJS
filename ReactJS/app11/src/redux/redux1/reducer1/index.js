import { combineReducers } from "redux"
import mainReduser from "../../redux2/reduser2"
import reduseRoot from "../../redux3/reduce3"
import ReduceComp from "../../redux4/reduce4"

const GetData={
    products:["Books","pens","pencils"],
    users:["Mahesh","Suresh","Lokesh","Naresh"],
    employees:{
        name:"chandu",
        id:"123",
        city:"kurnool"
    },
    images:<img src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg"  alt="" width="505px" height="500px" />,
    }
 function rootReducer(state=GetData,action) {
    switch (action.type) {
        case "GET_all_Products":
            return "Hello from all products"

            case "GET_all_Users":
            return "Hello from all Users"
            
            case "GET_all_Employees":
            return "Hello from all Employees"
    
        default:
        return state
    }
}
const rootReducer=combineReducers({
    data:mainReduser,
    info:reduseRoot,
    user:ReduceComp,
    
})