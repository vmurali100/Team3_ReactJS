export function getCartAction() {
    return{
        type:"GET_ALL_CARTS"
    }
}
export function cartDeleteAction() {
    return{
        type:"DELETE_CART"
    }
}
export function createCartAction(cart) {
    return{
        type:"CREATE_CART",
        payload:cart
    }
}
export function deleteCartAction(cart) {
    return{
        type:"CART_DELETE",
        payload:cart
    }
    
}