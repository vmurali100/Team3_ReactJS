const defaultValue = {
    cars: ["Alto", "Swift", "Hexa", "Innova", "Bolero"],
    bikes: ["Pulsar", "R15", "KTM"],
    Jeeps: [],
    bus: []
}
export default function rootreducer2(state = defaultValue, action) {
    switch (action.type) {
        case "GET_ALL_CARS":
            return defaultValue.cars
        case "GET_ALL_BIKES":
            return state.bikes
        case "GET_ALL_JEEPS":
            return state.Jeeps
        case "GET_ALL_BUS":
            return state.bus
        default:
            return []
    }
}