import React, { Component } from 'react'
import { connect } from 'react-redux'

class Employees extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.employees.map((emp)=>{
                    return <p>{emp}</p>
                })}
            </div>
        )
    }
}
function mapEmployeesProps(state){
    return {employees:state.employees}
    
}
export default connect(mapEmployeesProps)(Employees)