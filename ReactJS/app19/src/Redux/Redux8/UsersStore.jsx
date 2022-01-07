import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUserStore } from './Action'



class UsersStore extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getUsersFromStore =()=>{
        console.log(this.props)
         return this.props.dispatch(getAllUserStore())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getUsersFromStore }>Click </button>
                {this.props.userstext && this.props.userstext.map((users)=>{
                    return <ul>
                        <li>Name : {users.name.firstname}</li>
                        <li>City : {users.address.city}</li>
                        <li>Email: {users.email}</li>
                        <li>Phone: {users.phone}</li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllUserStore())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        userstext:state
    }
}

export default connect(mapStateToProps)(UsersStore)