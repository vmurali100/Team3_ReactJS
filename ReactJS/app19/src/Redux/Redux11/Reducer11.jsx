let names=[
    {
        "fname": "Mallika",
        "lname": "Lafaye"
    },
    {
        "fname": "Toni",
        "lname": "Hebert"
    },
    {
        "fname": "Alesia",
        "lname": "Adams"
    },
    {
        "fname": "Regina",
        "lname": "Diriwachter"
    },
    {
        "fname": "Roy",
        "lname": "Covel"
    },
    {
        "fname": "Joan",
        "lname": "Doll"
    },
    {
        "fname": "Leslie",
        "lname": "Wong"
    },
    {
        "fname": "Amy",
        "lname": "Melendez"
    },
    {
        "fname": "Abigail",
        "lname": "Josey"
    },
    {
        "fname": "RoMeka",
        "lname": "Little"
    }
]
const defaultValue={
    names:names
}
const Reducer11 = (state=defaultValue,action) => {
switch (action.type) {
    case "GET_ALL_NAMES":
        return defaultValue.names
       

    default:
        return []
}
}
export default Reducer11