import { GET_ALL_ALBUMS } from "./actionType";

const defaultState={
    albums:{}
}
function ReducerAlbums(state=defaultState,action){
    switch (action.type) {
        case GET_ALL_ALBUMS:
            return action.payload
    
        default:
            return defaultState.albums;
    }
}
export default ReducerAlbums