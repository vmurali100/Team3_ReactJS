export function getAllComments(){
    return{
        type:"GET_COMMENTS"
    }
}
export function DeleteCommentsActions(comments){
    return{
        type:"DELETE_COMMENTS",
        payload:comments
    }
}
export function createCommentsActions(comments){
    return{
        type:"CREATE_COMMENTS",
        payload:comments
        
    }
}