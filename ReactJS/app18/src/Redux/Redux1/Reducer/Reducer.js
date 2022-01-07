 let  products=["Accessories","Clothes","Toys","Gifts","Bags"]
 const defaultValue={
    products:products,
     students:["Abhi","Aishu","Sakthi","Priya"],
    
 }
 export default function reducer(state=defaultValue,action) {
    switch (action.type) {
      
        case "GET_ALL_PRODUCTS":
            return defaultValue.products
        case "DELETE_PRODUCTS":
            let deleteproducts = [...state]
            deleteproducts.pop()
            return deleteproducts

        default:
          return defaultValue.products
    }
}