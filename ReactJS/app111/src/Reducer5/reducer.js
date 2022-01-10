// let products=[{
//     productId:"1",
//     productName:"Book",
//     productType:"Study"
// },
// {
//      productId:"2",
// productName:"Music",
// productType:"Audio"
// },
// {
//     productId:"3",
//     productName:"Music",
//     productType:"Video"
// }
// ]
let products = []
const defaultState = {
    products: products
}
// created seperated store
const ProductsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return state.products
        case "DELETE_PRODUCT":
        //  let dltPrdt=[...state]     
        //  dltPrdt.pop()
        //  return dltPrdt
        case "CREATE_PRODUCT":
            let newPrdt = [...state]
            newPrdt.push(action.payload)
            return newPrdt
        case "PRODUCT_DELETE":
            let myPrdt=[...state]
            return myPrdt.filter((product)=>product !== action.payload)
        default:
            return state.products
    }
}
export default ProductsReducer