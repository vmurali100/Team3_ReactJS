import { GET_ALL_POSTS } from "./actionType";

const defaultState={
    posts:{}
}
function ReducerPosts(state=defaultState,action){
    switch (action.type) {
        case GET_ALL_POSTS:
            
            return action.payload;
    
        default:
            return defaultState;
    }
}
export default ReducerPosts