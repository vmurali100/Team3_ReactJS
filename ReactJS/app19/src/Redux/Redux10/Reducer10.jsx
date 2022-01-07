let login=[
    {
        "id": 21,
        "email": "CSchnell@mattis.com",
        "username": "LDay",
        "password": "fWnPe"
    },
    {
        "id": 22,
        "email": "RKnoepfel@libero.org",
        "username": "KKlug",
        "password": "oKzk4"
    },
    {
        "id": 23,
        "email": "HLaggan@nec.io",
        "username": "MAlunde",
        "password": "FWN1c"
    },
    {
        "id": 24,
        "email": "RCulp@amet.com",
        "username": "FBubel",
        "password": "2Rt0U"
    },
    {
        "id": 25,
        "email": "SWaltz@sed.org",
        "username": "LMosher",
        "password": "AJ317"
    },
]
const defaultValue={
    login:login
}
const Reducer10 = (state=defaultValue,action) => {
switch (action.type) {
    case "GET_ALL_LOGIN":
        return defaultValue.login
       

    default:
        return []
}
}
export default Reducer10