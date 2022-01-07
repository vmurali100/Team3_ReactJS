import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllLogin } from './Action'
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getLogindetails =()=>{
        console.log(this.props)
         return this.props.dispatch(getAllLogin())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getLogindetails }>Click </button>
                {this.props.login && this.props.login.map((user)=>{
                    return <ul>
                        <li>Id : {user.id}</li>
                        <li>Name : {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllLogin())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        login:state
    }
}

export default connect(mapStateToProps)(Login)