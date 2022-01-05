const GetData={
    products:["Books","pens","pencils"],
    users:["Mahesh","Suresh","Lokesh","Naresh"],
    employees:{
        name:"chandu",
        id:"123",
        city:"kurnool"
    },
    images:<img src="https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg"  alt="" width="505px" height="500px" />,
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