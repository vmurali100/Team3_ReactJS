import React, { Component } from 'react'
import {connect} from "react-redux"

 class Employees extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}

 function mapEmployeeProps(state) {
    return (
        {employee:state}
    )
}
export default connect(mapEmployeeProps)(Employees)

