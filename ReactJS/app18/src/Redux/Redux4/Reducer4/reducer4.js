 const defaultValue={
     functions:["ComponentA","ComponentB","ComponentC"],
     arrays:["Vegetables","Fruits","Greens","Groceries"],
     obj:["Laptop","Mobiles","Pendrive","Headset"],
     arrayofobjects:["Tv","Speaker","furniture","Sofa"]
 }
 export default  function objectReducer(state=defaultValue, action) {

    switch (action) {
        case "GET_ALL_FUNCTIONS":
            return state.functions
        case "GET_ALL_ARRAY":
            return state.arrays
        case "GET_ALL_OBJECTS":
            return state.obj
        case "GET_ALL_ARRAYOFOBJECTS":
            return state.arrayofobjects

           

        default:
           return state
    }
}