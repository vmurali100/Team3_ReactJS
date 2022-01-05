import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Empoyees extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <ul>
                    <li><b>Name:{this.props.employees.name}</b></li>
                    <li><b>Id:{this.props.employees.id}</b></li>
                    <li><b>City:{this.props.employees.city}</b></li>
                
                </ul>
            </div>
        )
    }
}
function PassingData(state) {
    return(
        {employees:state.employees}
    )
    
}
export default connect(PassingData)(Empoyees)