import { combineReducers } from "redux"
import usersReducer from "../../Redux1/reduc/Chandu"
import Todos from "../../redux2/reducer2/babu"

const defaultState={
    students:[],
    sub:[]
}
let allStudents=["Chandu","Lokesh","Harish","Abi"]
let allSubjects=["Maths","Science","English"]
const rootReducer=(state=defaultState,action)=>{
    console.log(state)

    switch (action.type) {
        case "GET_ALL_STUDENTS":
          return allStudents;

            case "GET_ALL_SUBJECTS":
              return allSubjects;
            
    
        default:
            return []
    }
}
const Reducer=combineReducers({
    students:rootReducer,
    users:usersReducer,
    todos:Todos
})
export default Reducer