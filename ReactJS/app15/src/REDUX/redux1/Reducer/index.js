const defaultState = {
    students: ["redux1","redux2","redux3","redux4"],
    employee:["username","email","password"]
}
function rootReducer(state = defaultState, actions) {
    switch (actions.type) {
        case "GET_STUDENT_DETAILS":
            return defaultState.students;

        case "GET_EMPLOYEE_DETAILS":
            return defaultState.employee;

        // case "DELETE_USER":
        //     defaultState.students.pop()
        //     return defaultState.students

        default:
           return defaultState.students
    }
}

export default rootReducer