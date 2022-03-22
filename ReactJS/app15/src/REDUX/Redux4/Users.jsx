import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CreateusersAction, DeleteAction, DeleteUserActions, GetAllusers } from './action'

class Users extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        fname: "",
        age: "",
        qualification: "",
      }
    }
  }

  getUsers = () => {
    this.props.getUserData()
  }
  deleteUsers = () => {
    this.props.DeleteUserData()
    console.log(this.props)
  }
  handleChange = (e) => {
    let newuser = { ...this.state.user }
    newuser[e.target.name] = e.target.value
    this.setState({ user: newuser })
  }
  createUsers = () => {
    console.log(this.props)
    this.props.createUserData(this.state.user)
  }
  deleteusersData = (user) => {
    this.props.deleteUser(user)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <form>
          <label htmlFor="fname">first name:</label>
          <input type="text" name="fname" value={this.state.fname} onChange={(e) => {
            this.handleChange(e)
          }} /><br />

          <label htmlFor="age">age:</label>
          <input type="text" name="age" value={this.state.age} onChange={(e) => {
            this.handleChange(e)
          }} /><br />

          <label htmlFor="qualification">qualification:</label>
          <input type="text" name="qualification" value={this.state.qualification} onChange={(e) => {
            this.handleChange(e)
          }} /><br />
          <button type="button" onClick={this.createUsers}>click</button>
        </form>
        {this.props.users && this.props.users.map((user) => {
          //    return <p><i>name:{user.name}</i></p>
          return <ul>
            <li>{user.fname}</li>
            <li>{user.age}</li>
            <li>{user.qualification}</li>
            <button onClick={() => this.deleteusersData(user)}>delete</button>
          </ul>
        })}
        {/* <button onClick={this.getUsers} type="button">get users</button>
                <button type="button" onClick={this.deleteUsers}>delete</button> */}
      </div>
    )
  }
}
function mapToUserProps(state) {
  return {
    users: state
  }

}
function mapDispatchToProps(dispatch) {
  return {
    getUserData: () => dispatch(GetAllusers()),
    DeleteUserData: () => dispatch(DeleteUserActions()),
    createUserData: (user) => dispatch(CreateusersAction(user)),
    deleteUser: (user) => dispatch(DeleteAction(user))
  }
}
export default connect(mapToUserProps, mapDispatchToProps)(Users)
