import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Users extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.Users.map((us)=>{
                    return <h3 key={us}>{us}</h3>
                })}
            </div>
        )
    }
}
function mapStateToProps(state){
    
    return (
       { Users:state}
    )
}
export default connect(mapStateToProps)(Users)