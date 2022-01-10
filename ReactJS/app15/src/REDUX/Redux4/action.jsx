export function GetAllusers(){
    return{
        type:"GET_USERS"
    }
}
export function DeleteUserActions(){
    return{
        type:"DELETE_USERS"
    }
}
export function CreateusersAction(user){
    return{
        type:"CREATE_USERS",
        payload:user
    }
}
export function DeleteAction(user){
    return{
        type:"DELETE_USER",
        payload:user
    }
}