export function getAllAlbums(albums){
    return{
        type:"GET_ALL_ALBUMS",
        payload:albums
    }
}