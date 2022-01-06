const defaultState={
    students:["Chandu","Lokesh","Harish","Abi"]
}
const rootReducer=(state=defaultState,action)=>{
    console.log(state)

    switch (action.type) {
        case "GET_ALL_STUDENTS":
          return state.students  
            
    
        default:
            return state;
    }
}
export default rootReducer