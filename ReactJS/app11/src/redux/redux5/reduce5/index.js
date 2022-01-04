

export default function CompoReduce(state,action) {
    switch (action.data) {
        case "PUT-Values-Students":
            return "All student details"
        case "PUT-Values-Subjects":
            return "All subject details"



        default:
            return "Details"
    }

}