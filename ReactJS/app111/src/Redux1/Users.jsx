import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from './action1/action1'

 class Users extends Component {
     showUsers=()=>{
         this.props.dispatch(getAllUsers())
     }
    render() {
        return (
            <div>
                <h2>Click on Users Details</h2>
                <button onClick={this.showUsers}>users</button>
                {this.props.users.users.map((usr,i)=>{
                    return <li key={i}>id:{usr.id}<br/>name:{usr.name}<br/>Email:{usr.email}</li>
                
                })}
            </div>
        )
    }
}
function stateToProps(state) {
    return{
        users:state
    }
}
export default connect(stateToProps)(Users)