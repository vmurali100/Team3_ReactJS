export function addUsersAction(user){
    console.log(user)
    return{
        type:"ADD_USERNAME",
        payload:user,
    }
}
export function deleteUsersAction(user){
    return{
        type:"UPDATE_USERNAME",
        payload:user
    }
}
export function updateUsersAction(user){
    return{
        type:"DELETE_USERNAME",
        payload:user
    }
}
