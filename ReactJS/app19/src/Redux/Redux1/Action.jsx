export function getAllUsers() {
    return{
        type:"GET_ALL_USERS"
    }
}
export function deleteUser(user)  {
    return {
        type:"DELETE_USER",
        payload:user
    }
}
export function createUser(user)  {
    return {
        type:"CREATE_USER",
        payload:user
    }
}