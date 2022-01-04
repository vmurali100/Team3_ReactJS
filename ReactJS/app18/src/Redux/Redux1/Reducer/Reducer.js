 const defaultValue={
     products:["Accessories","Clothes","Toys","Gifts","Bags"],
     students:["Abhi","Aishu","Sakthi","Priya"],
     items:[],
     list:[],
     service:[]
 }
 export default function reducer(state=defaultValue,action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return state.students
        case "GET_ALL_PRODUCTS":
            return state.products
        case "GET_ALL_ITEMS":
            return state.items
        case "GET_ALL_LIST":
            return state.list
        case "GET_ALL_SERVICE":
                return state.service


        default:
          return  state;
    }
}