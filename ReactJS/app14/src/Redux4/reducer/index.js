export default function rootReducer4(state,action){
    switch (action) {
        case "Get_All_Users":
            return "hello from users"

        case "Get_All_Students":
            return "hello from students"

        case "Get_All_Lists":
            return "hello from Lists"
        default:
            return "hello";
    }
}