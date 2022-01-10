export function getDataAction() {
    return{
        type:"GET_ALL_PHOTOS"
    }
}
export function deletePhotoAction() {
    return{
        type:"DELETE_PHOTO"
    }
}
export function createPhotosAction(photo) {
    return{
        type:"CREATE_PHOTO",
        payload:photo
    }
    
}
export function photoDeleteAction(photo) {
    return{
        type:"PHOTO_DELETE",
        payload:photo
    }
    
}