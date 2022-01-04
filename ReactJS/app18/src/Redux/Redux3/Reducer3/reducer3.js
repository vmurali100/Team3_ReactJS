const defaultValue={
    sample1:["A","B","C","D","E"],
    sample2:[1,2,3,4,5],
    sample3:["a","b",'c',"d","e"],
    sample4:["!","@","#","$","%"]
}
export default function rootreducer3(state=defaultValue, action) {
    switch (action.type) {
        case "GET-ALL_SAMPLE1":
            return state.sample1
        case "GET-ALL_SAMPLE2":
            return  state.sample2
        case "GET-ALL_SAMPLE3":
            return  state.sample3
        case "GET-ALL_SAMPLE4":
            return  state.sample4


        default:
           return state
    }
}