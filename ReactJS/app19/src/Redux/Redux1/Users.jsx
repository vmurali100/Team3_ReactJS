import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from './Action'

class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getUsers=()=>{
        return  this.props.dispatch(getAllUsers())
    }
    render(props) {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getUsers}>Click to get data</button>
                {this.props.users && this.props.users.map((pro)=>{
                    return <ul>
                        <li key={pro}>Name : {pro.name}</li>
                        <li key={pro}>Email : {pro.email}</li>
                    </ul>
                })}
                
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     this.props.dispatch(getAllUsers())
    // }
}
function mapStateToProps(state) {
    return {
        users:state
    }
}
export default connect(mapStateToProps)(Users)