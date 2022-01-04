export default function ReduceComp(state,action) {
    switch (action) {
        case "GET-details-Items":
            return "hello items details"
        case "GET-details-Carts":
            return "hello carts details"
        case "GET-details-Maps":
            return "hello maps details"


        default:
            return "Helo component"
    }

}