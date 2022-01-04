import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Users extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
              {this.props.users.map((user)=>{
                  return(
                      <p key={user}><i>{user}</i></p>
                  )
              })}  
            </div>
        )
    }
}
function mapStateToProps(state) {
    return(
        {users:state.users}
    )
    
}
export default connect(mapStateToProps)(Users)
