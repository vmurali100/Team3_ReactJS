import React, { Component } from 'react'
import { connect } from 'react-redux'


 class Students extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.Student.map((st)=>{
                   return <p>{st}</p>
                })}
            </div>
        )
    }
}

function mapStudentsProps(state) {
    return (
        {Student:state.Student}
    )
}
export default connect(mapStudentsProps)(Students)
