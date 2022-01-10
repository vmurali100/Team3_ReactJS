// let carts = [{
//     id: "1",
//     name: "Mobile",
//     shopping: "Amazon"
// },
// {
//     id: "2",
//     name: "Computer",
//     shopping: "Amazon"
// },
// {
//     id: "3",
//     name: "Books",
//     shopping: "Amazon"
// },
// {
//     id: "4",
//     name: "HomeCare",
//     shopping: "Amazon"

// },
// {
//     id: "5",
//     name: "Gifts",
//     shopping: "Amazon"
// }
// ]
let carts=[]
const defaultState = {
    carts:carts
}

const reduxReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_ALL_CARTS":
            return state.carts
        case "DELETE_CART":
            let dltCart = [...state]
            dltCart.pop()
            return dltCart
        case "CREATE_CART":
            let newcart=[...state]
            newcart.push(action.payload)
            return newcart
         case "CART_DELETE":
             let mycart=[...state]  
             return mycart.filter((cart)=>cart !== action.payload) 
        default:
            return state.carts
    }
}
export default reduxReducer