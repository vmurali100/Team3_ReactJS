export default function reduseRoot(state,action) {
    switch (action.value) {
        case "EDIT_Products":
            return "Hello from edit products"
        case "EDIT_Users":
            return "Hello from edit products"
        case "EDIT_Employees":
            return "Hello from edit products"

        default:
            return "Hello component"
    }
}