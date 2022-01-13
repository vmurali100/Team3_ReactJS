import { GET_ALL_PHOTOS } from "./actionType"

const defaultState={
    photos:{}
}
const photosReducer=(state=defaultState,action)=>{
switch (action.type) {
    case GET_ALL_PHOTOS:
        return action.payload
        
    

    default:
    return state.photos
}
}
export default photosReducer