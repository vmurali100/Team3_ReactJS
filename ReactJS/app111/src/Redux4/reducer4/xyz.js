const defaultState={
    albums:[]
}
const albumReducer=(state=defaultState,action)=>{
       switch (action.type) {
           case "GET_ALL_ALBUMS":
               let newAlbum=[...state]
               newAlbum.push(action.payload)
               return newAlbum
               
       
           default:
            return defaultState
       }
}
export default albumReducer