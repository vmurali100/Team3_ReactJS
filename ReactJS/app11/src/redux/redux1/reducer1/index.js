const GetData={
    products:["Books","pens","pencils"],
    users:["Mahesh","Suresh","Lokesh","Naresh"],
    employees:[]
}
export default function rootReducer(state=GetData,action) {
    switch (action.type) {
        case "GET_all_Products":
            return "Hello from all products"

            case "GET_all_Users":
            return "Hello from all Users"
            
            case "GET_all_Employees":
            return "Hello from all Employees"
    
        default:
        return state
    }
}