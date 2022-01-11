export function getAllComments() {
    return {
        type:"GET_ALL_COMMENTS"
    }
}
export function deleteCommentsData() {
    return{
        type:"DELETE_COMMENT"
    }
}
export function createComments(comments){
    return {
        type:"CREATE_COMMENTS",
        payload:comments
    }
}
export function delCommentsData(comments) {
    return{
        type:"DELETE_COMMENTSDATA",
        payload:comments
    }
}