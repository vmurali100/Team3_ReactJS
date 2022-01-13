import { GET_ALL_TODOS } from "./actionType";

const defaultState={
    todos:{}
}
const todosReducer=(state=defaultState,action)=>{
switch (action.type) {
    case GET_ALL_TODOS:
    return action.payload

    default:
        return state.todos
}
}
export default todosReducer