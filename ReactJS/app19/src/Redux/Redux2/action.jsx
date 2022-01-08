export function getALLTodos() {
    return {
        type:"GET_ALL_TODOS"
    }
}
export function deleteTodo(todo) {
    return {
        type:"DELETE_TODOS",
        payload:todo
    }
}
export function createTodoAction(todo) {
    return {
        type:"CREATE_TODOS",
        payload:todo
    }
}