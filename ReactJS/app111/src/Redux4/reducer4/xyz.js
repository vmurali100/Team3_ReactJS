let albums=[]
const defaultState={
    albums:albums
}
const albumReducer=(state=defaultState,action)=>{
       switch (action.type) {
           case "CREATE_ALL_ALBUMS":
               let newAlbum=[...state]
               newAlbum.push(action.payload)
               return newAlbum
           case "GET_ALL_ALbums":
               return defaultState.albums    
       
           default:
            return defaultState.albums
       }
}
export default albumReducer