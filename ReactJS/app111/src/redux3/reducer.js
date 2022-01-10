

// let comments=[{
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },
//   {
//     "postId": 1,
//     "id": 2,
//     "name": "quo vero reiciendis velit similique earum",
//     "email": "Jayne_Kuhic@sydney.com",
//     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//   },
//   {
//     "postId": 1,
//     "id": 3,
//     "name": "odio adipisci rerum aut animi",
//     "email": "Nikita@garfield.biz",
//     "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//   }]
let comments=[]
  const defaultState={
    comments:comments
  }
  const CommentReducer=(state=defaultState,action)=>{
  switch (action.type) {
      case "GET_ALL_COMMENTS":
        return defaultState.comments
     case "DELETE_COMMENT":
        //  let newcmt=[...state]  
        //  newcmt.pop()
        //  return newcmt
         case "CREATE_COMMENT":
            let mycmt=[...state]
            mycmt.push(action.payload)
            return mycmt
            case "DELETE_CMT":
              let newCMT=[...state]
              return newCMT.filter((comment)=> comment !== action.payload)
      default:
        return defaultState.comments

  }
  }
  export default CommentReducer