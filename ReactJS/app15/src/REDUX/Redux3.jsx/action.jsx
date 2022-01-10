export function getAllAlbums(){
    return{
        type:"GET_ALBUMS"
    }
}
export function deleteAlbumActions(albums){
    return {
        type:"DELETE_ALBUMS",
        payload:albums
    }
}
export function createAlbum(albums){
    return {
        type:"CREATE_ALBUM",
        payload:albums
    }
}