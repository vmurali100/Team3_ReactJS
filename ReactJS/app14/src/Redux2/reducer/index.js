const defaultData = {
    users:[],
    employees: ["chandu", "lokesh", "hareesh", "abhi"],
    students:[]

}
export default function rootReducer2(state = defaultData, action) {
    switch (action.type) {
        case "Get All Lists":
            return state.employees;

        case "Get All Students":
            return "Hello from students";

        case "Get All Users":
            return "Hello from users";

        default:
            return state;
    }
}