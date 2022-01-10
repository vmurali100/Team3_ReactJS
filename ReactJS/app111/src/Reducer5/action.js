export function getPrdtAction() {
    return{
        type:"GET_ALL_PRODUCTS"
    }
}
export function deletePrdtAction() {
    return{
        type:"DELETE_PRODUCT"
    }
}
export function createPrdtAction(product) {
    return{
        type:"CREATE_PRODUCT",
        payload:product
    }
    
}
export function  ProductDltAction(product) {
    return{
        type:"PRODUCT_DELETE",
        payload:product
    }
}