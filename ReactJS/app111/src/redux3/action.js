export function getDataAction() {
    return{
        type:"GET_ALL_COMMENTS"
    }
}
export function deleteMethod(){
    return{
        type:"DELETE_COMMENT"
    }
}
export function createActioncmt(comment){
    return{
        type:"CREATE_COMMENT",
        payload:comment
    }
}
export function dltCmtAction(comment){
    return{
        type:"DELETE_CMT",
        payload:comment
    }
}