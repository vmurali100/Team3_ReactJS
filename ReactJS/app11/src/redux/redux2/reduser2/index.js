export default function mainReduser(state,action) {
    switch (action.value) {
        case "DELETE_Products":
            return "Hello delete products"

        case "DELETE_users":
            return "Hello delete users"


        default:
            return "Hello redux"
    }

}