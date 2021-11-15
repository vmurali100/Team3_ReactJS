import React from "react"

export function First(props) {
    console.log(props.studentInfo)
    return (
        <div>
        <h2>This is First function</h2>
        <ul>
                <li>first Name:{props.studentInfo.fName}</li>
                <li>last Name:{props.studentInfo.lName}</li>
        </ul>
    </div>
    )
}
export function Last(){
    return <h2>This is Second function</h2>
}

export const AComp=()=>{
    return <h3>This is A Component</h3>
}
export const BComp=()=>{
    return <h3>This is B Component</h3>
}

// export default class Abhi extends Component{
//     render(){
//         return  <div>
//             <h2>This is a class</h2>

//         </div>
//     }
// }