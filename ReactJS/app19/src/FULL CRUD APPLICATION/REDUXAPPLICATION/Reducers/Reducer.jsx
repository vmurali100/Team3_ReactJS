const defaultValue={
    user:[{fName:"Abhi"},{fName:"Abirami"},{fName:"Priya"}]
}

export default function Reducer(state=defaultValue, action) {
    switch (action.type) {
        case "GET_ALL_USERS":
            // console.log(action)
            // console.log(state)
            var allUsers=[...state]
            allUsers.push(action.payload)
            return allUsers
        case "DELETE_ALL_USERS":
            return state.filter((user)=>user.fName !== action.payload.fName)
        case "UPDATE_ALL_USERS":
            allUsers=[...state]
            allUsers[action.payload.id]=action.payload
            return allUsers
        default:
            return state.user
    }
}