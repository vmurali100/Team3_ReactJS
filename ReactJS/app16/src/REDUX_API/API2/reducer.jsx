import { GET_ALL_TODOS } from "./actionType";

const defaultState={
    todos:{}
}
function todosReducer(state=defaultState,action){
    switch (action) {
        case GET_ALL_TODOS:
           return state.todos 
        default:
            return state.todos
    }
}
export default todosReducer