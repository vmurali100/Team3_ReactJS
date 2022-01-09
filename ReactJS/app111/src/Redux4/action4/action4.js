export function createNewAlbum(albums){
    return{
        type:"CREATE_ALL_ALBUMS`",
        payload:albums
    }
}
export function getAllAlbums(){
return{
    type:"GET_ALL_ALbums"
}
}