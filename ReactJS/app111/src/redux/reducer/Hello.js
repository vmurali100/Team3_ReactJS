const defaultState={
    students:[]
}
let allStudents=["Chandu","Lokesh","Harish","Abi"]
const rootReducer=(state=defaultState,action)=>{
    console.log(state)

    switch (action.type) {
        case "GET_ALL_STUDENTS":
          return allStudents;
            
    
        default:
            return []
    }
}
export default rootReducer