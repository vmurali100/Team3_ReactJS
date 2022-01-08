import { combineReducers } from "redux"
import usersReducer from "../../Redux1/reduc/Chandu"
import Todos from "../../redux2/reducer2/babu"
import commentReducer from "../../redux3/reduce3/abc"
import albumReducer from "../../Redux4/reducer4/xyz"

const defaultState={ 
    students:["Chandu","Lokesh","Harish","Abi"],
    sub:[]
    }
let allStudents=["Chandu","Lokesh","Harish","Abi"]
let allSubjects=["Maths","Science","English"]
const rootReducer=(state=defaultState,action)=>{
    // console.log(state)

    switch (action.type) {
        case "GET_ALL_STUDENTS":
          return defaultState.students;

            case "GET_ALL_SUBJECTS":
              return allSubjects;
            case "DELETE_STUDENTS":
             let allStudents=[...state]
             allStudents.pop()
             return allStudents
        default:
            return defaultState.students
    }
}
const Reducer=combineReducers({
    students:rootReducer,
    users:usersReducer,
    todos:Todos,
    Comment:commentReducer,
    albums:albumReducer
})
export default Reducer