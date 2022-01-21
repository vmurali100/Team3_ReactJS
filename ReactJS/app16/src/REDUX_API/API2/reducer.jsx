import { GET_ALL_TODOS } from "./actionType";

const defaultState={
    todos:{}
}
function todosReducer(state=defaultState,action){
    switch (action.type) {
        case GET_ALL_TODOS:
           return action.payload 
        default:
            return defaultState.todos
    }
}
export default todosReducer