const defaultState={
    products:[{name:"Books"},{name:"Mobiles"},{name:"Computers"}]
}
const rootReducer=(state=defaultState,action)=>{
switch (action.type) {
    case "ADD_PRODUCTS":
        var allProducts=[...state]
        allProducts.push(action.payload)
        return allProducts
    case "UPDATE_PRODUCTS":
        allProducts=[...state]
        allProducts[action.payload.id]=action.payload
        return allProducts
    case "DELETE_PRODUCTS":
        return state.filter((prdt)=>prdt.name !== action.payload.name)
    default:
        return  state.products;
}
}
export default rootReducer