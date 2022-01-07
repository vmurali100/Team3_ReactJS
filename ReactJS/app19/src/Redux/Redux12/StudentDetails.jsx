import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllStudents } from './Action'

class StudentDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getStudentsDetails =()=>{
        console.log(this.props)
         return this.props.dispatch(getAllStudents())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getStudentsDetails }>Click </button>
                {this.props.students && this.props.students.map((student)=>{
                    return <ul>
                        <li>First Name: {student.fname}</li>
                        <li>Last Name : {student.lname}</li>
                        <li>Address: {student.address}</li>
                        <li>City: {student.city}</li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllStudents())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        students:state
    }
}

export default connect(mapStateToProps)(StudentDetails)