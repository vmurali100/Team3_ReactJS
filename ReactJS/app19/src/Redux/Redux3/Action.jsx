 export function getAllPhotos() {
    return {
        type:"GET_ALL_PHOTOS"
    }
}
export function deleteImagesAction() {
    return {
        type:"DELETE_IMAGES"
    }
}
export function createPhotos(photos) {
    return {
        type:"CREATE_IMAGES",
        payload:photos
    }
}