const defaultState = {
    users: [{ username: "dilip" }, { username: "kumar" }, { username: "sankar" }]
}
const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_USERNAME":
            var allusers = [...state]
            allusers.push(action.payload)
            return allusers

        case "DELETE_USERNAME":
            return state.filter((user) => user.username !== action.payload.username)
        
        case "UPDATE_USERNAME":
            allusers = [...state]
            allusers[action.payload.id] = action.payload
            return allusers
            
        default:
            return state.users;
    

    }
}
export default rootReducer