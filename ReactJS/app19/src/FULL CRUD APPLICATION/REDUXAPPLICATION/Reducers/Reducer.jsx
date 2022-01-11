const defaultValue={
    users:[]
}

export default function Reducer(state=defaultValue, action) {
    switch (action.type) {
        case "GET_ALL_USERS":
            return
        case "DELETE_ALL_USERS":
            return
        case "UPDATE_ALL_USERS":
            return
        default:
            return state
    }
}