import { GET_ALL_PHOTOS } from "./actionType";

const defaultState={
    photos:{}
}
function ReducerPhotos(state=defaultState,action){
    switch (action.type) {
        case GET_ALL_PHOTOS:
            
            return action.payload
    
        default:
            return defaultState.photos
    }
}
export default ReducerPhotos