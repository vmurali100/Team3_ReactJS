export function getAllUser(user) {
    console.log(user)
    return {
        type:"GET_ALL_USERS",
        payload:user
    }
}
export function deleteUser(user) {
    return {
        type:"DELETE_ALL_USERS",
        payload:user
    }
}
export function UpdateUser(user) {
    return {
        type:"UPDATE_ALL_USERS",
        payload:user
    }
}