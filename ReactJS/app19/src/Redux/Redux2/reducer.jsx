
// let todos=[
//     {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 5,
//       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 6,
//       "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 7,
//       "title": "illo expedita consequatur quia in",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 8,
//       "title": "quo adipisci enim quam ut ab",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 9,
//       "title": "molestiae perspiciatis ipsa",
//       "completed": false
//     },
//     {
//       "userId": 1,
//       "id": 10,
//       "title": "illo est ratione doloremque quia maiores aut",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 11,
//       "title": "vero rerum temporibus dolor",
//       "completed": true
//     },
//     {
//       "userId": 1,
//       "id": 12,
//       "title": "ipsa repellendus fugit nisi",
//       "completed": true
//     },
//   ]
const defaultValue={
    todos:[]
}
 const rootreducer2 = (state=defaultValue,action) => {
    switch (action.type) {
        case "GET_ALL_TODOS":
            return defaultValue.todos
         case "DELETE_TODOS":
            // let newTodo=[...state]
            // newTodo.pop()
            // return newTodo
            let allTodo = [...state];
      
      return allTodo.filter((todo)=>todo.lName !== action.payload.lName);
            return 
          case "CREATE_TODOS":
            let newTodos=[...state]
            newTodos.push(action.payload)
            return newTodos
        default:
            return defaultValue.todos
    }
}
export default rootreducer2
