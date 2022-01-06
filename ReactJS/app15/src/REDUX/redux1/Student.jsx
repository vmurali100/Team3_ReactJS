import React, { Component } from 'react'
import {connect} from "react-redux"
import {deleteStudentsAction, getAllstudentsinfo} from './actions'

class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    StudentDetails=()=>{
        this.props.dispatch(getAllstudentsinfo()) 
    }

    // DeleteStudent=()=>{
    //     this.props.dispatch(deleteStudentsAction())
    // }

    render() {
       console.log(this.props)
        return (
            <div>
                <h1><i>redux</i></h1>
                <button onClick={this.StudentDetails}>click</button>
                {/* <button onClick={this.DeleteStudent}>Delete</button> */}
                {this.props.students.map((st,i)=>{
                    return  <p key={i}>{st}</p>

                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllstudentsinfo())
    // }
}
function mapStudentProps(state){
    return(
        {students:state}
    )
}
export default connect(mapStudentProps)(Student)
