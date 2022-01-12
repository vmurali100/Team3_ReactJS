// case "ADD_PRODUCTS":
        
//     case "UPDATE_PRODUCTS":
 
//     case "":
export function addProductAction(product) {
    return{
        type:"ADD_PRODUCTS",
        payload:product
    }
    
}
export function deleteProductAction(product) {
    return{
        type:"DELETE_PRODUCTS",
        payload:product
    }
}
export function updateProductAction(product) {
    return{
        type:"UPDATE_PRODUCTS",
        payload:product
    }
}