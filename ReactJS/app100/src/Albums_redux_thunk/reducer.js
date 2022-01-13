import { GET_ALL_ALBUMS } from "./actionType";

const defaultState ={
    albums:{}
}
const albumsReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case GET_ALL_ALBUMS:
          return action.payload
    
        default:
            return state.albums
    }
}
export default albumsReducer