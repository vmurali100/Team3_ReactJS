import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Student extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        students:state
    }
}
export default connect(mapStateToProps)(Student)