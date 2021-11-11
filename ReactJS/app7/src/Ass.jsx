import React, { Component } from "react"
import { First } from "./First"


export class Student extends Component {
    constructor() {
        super()
        this.state = {
            Message: "Students Profile ",
            studentDetails: {
                fName: "Abhi",
                lName: "M",
                email: "abirami121297@gmail.com",
            },
            flowers: ["Rose", "Jasmine", "Hibiscus"]
        }
    }
    render() {
        return <div>
            <h2>
                StudentDetails
            </h2>

            {/* <ul>
                <li>first Name:{this.state.studentDetails.fName}</li>
                <li>last Name:{this.state.studentDetails.lName}</li>
            </ul> */}
            <First studentInfo={this.state.studentDetails} />
        </div>
    }
}