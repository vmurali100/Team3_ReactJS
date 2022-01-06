const defaultData = {
    // students: {
    //     username: "lokesh",
    //     password: "qwerty",
    //     email: "lokesh@gmail.com",

    // }
    Student: ["lokesh", "chandu", "hareesh", "abhi"]
}
 function rootReducer1(state = defaultData, actions) {
    switch (actions.type) {
        case "Get_All_Students":
            return state.Student;

        case "Get_All_Products":
            return "hello ferom all products";

        case "Get_All_Lists":
            return "hello ferom all lists";

        default:
            return state;
    }
}
export default rootReducer1