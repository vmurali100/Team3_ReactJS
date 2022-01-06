const defaultData = {
    colors: ["blue", "green", "yellow", "red", "white"]
}
export default function rootReducer3(state = defaultData, action) {
    switch (action.type) {
        case "Get_All_Colors":
            return state.colors

        case "Get All Lists":
            return "hello from Lists"

        case "Get All Users":
            return "hello from Users"
        default:
            return state;
    }
}