import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser, deleteUser, getAllUsers } from './Action'

class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                names: "",
                email: ""
            }
        }
    }
    getUsers = () => {
        this.props.getUsersAction()
        console.log(this.props)
        //   this.props.dispatch(getAllUsers())
    }
    deleteUser = () => {
        console.log(this.props)
        this.props.deleteUserAction()
    }
    handleChange=(e)=>{
        let newUsers = { ...this.state.user };
        newUsers[e.target.name] = e.target.value;
        this.setState({ user: newUsers });
    console.log(newUsers)
    }
    handleCreate=()=>{
        this.props.createUsersAction(this.state.user);
    }
    handleDelete=(user)=>{
        this.props.deleteUserAction(user)
    }
    render(props) {
        console.log(this.props)
        return (
            <div>
                <form >
                    <label htmlFor="names">Name</label><br />
                    <input type="text" name="names" value={this.state.names } onChange={(e)=>{this.handleChange(e)}} /> <br />
                    <label htmlFor="email">Email</label><br />
                    <input type="text" name="email" value={this.state.email } onChange={(e)=>{this.handleChange(e)}}/> <br />
                    <button onClick={this.handleCreate} type="button">Submit</button>
                </form>
                {/* <button onClick={this.getUsers}>Click to get data</button>
                <button onClick={this.deleteUser}>Delete User</button> */}
                {this.props.users && this.props.users.map((user,i) => {
                    return <p key={i}>Name : {user.names} , Email :{user.email} -
                    <button onClick={()=>{this.handleDelete(user)}}>Delete User</button>
                    </p>
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
        users: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUsersAction: () => dispatch(getAllUsers()),
        deleteUserAction: (user) => dispatch(deleteUser(user)),
        createUsersAction: (user) => dispatch(createUser(user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)