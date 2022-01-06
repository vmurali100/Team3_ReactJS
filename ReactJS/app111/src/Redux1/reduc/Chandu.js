const defaultState={
    users:[]
}
let AllUsers=[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
     
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",}
  ]
const usersReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case "GET_ALL_USERS":
            return AllUsers
        
    
        default:
            return []
    }
}
export default usersReducer