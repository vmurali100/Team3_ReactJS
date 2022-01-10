export function getAllPosts(){
    return{
        type:"GET_POSTS"
    }
}
export function deletePosts(posts){
    return{
        type:"DELETE_POSTS",
        payload:posts
    }
}
export function createPosts(posts){
    return{
            type:"CREATE_POSTS",
            payload:posts
    }
}