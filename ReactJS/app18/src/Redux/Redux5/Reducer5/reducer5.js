import { combineReducers } from "redux"
import objectReducer from "../../Redux4/Reducer4/reducer4"

const defaultValue = {
    users: ["User1", "User2", "User3"],
    person: ["Abhi", "Priya", "Abi"],
    employees: ["Emp1", "Emp2", "Emp3"],
    shop: ["Grocery", "Furniture", "Utensils", "Electrical Items"]
}
function usersReducer(state = defaultValue, action) {
    switch (action.type) {
        case "GET_ALL_USERS":
            return state.users
        case "GET_ALL_PERSON":
            return state.person
        case "GET_ALL_EMPLOYEES":
            return state.employees
        case "GET_ALL_SHOP":
            return state.shop
        default:
            return state
    }
}
const rootreducers = combineReducers({
    shop: usersReducer,
    obj: objectReducer,
})
export default rootreducers;