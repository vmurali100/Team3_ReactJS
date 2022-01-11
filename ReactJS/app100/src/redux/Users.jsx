import React, { Component } from 'react'

export default class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                name: ""
            },
            users: [],
            index:null
        } 
    }
    addinguser = () => {
        let allUsers = [...this.state.users]
        allUsers.push(this.state.user)
        this.setState({ users: allUsers })
        this.handleClear()
    }
    handleChange = (e) => {
        let newuser = { ...this.state.user }
        newuser[e.target.name] = e.target.value
        this.setState({ user: newuser })
    }
    handleClear = () => {
        this.setState({
            user: {
                name: ""
            }
        })
    }
    handleEdit = (user,i) => {
        this.setState({user,index:i})

    }
    updateUser=()=>{
        let allUsers = [...this.state.users]
        allUsers[this.state.index]=this.state.user
        this.setState({users:allUsers,index:null})
        this.handleClear()
    }
    deleteUser=(user)=>{
        let allUsers = [...this.state.users]
        this.setState({users:allUsers.filter((usr)=>usr.name !== user.name)})
        this.handleClear()
    }
    render() {
        return (
            <div>
                <h2>Hello from Users component</h2>
                <form >
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={this.state.user.name} onChange={(e) => { this.handleChange(e) }} />
                    {this.state.index ? ( <button type='button' onClick={this.updateUser}>Update</button>) :(<button type='button' onClick={this.addinguser}>AddUser</button>)}
                    {/* <button type='button' onClick={this.addinguser}>AddUser</button>
                    <button type='button' onClick={this.updateUser}>Update</button> */}
                </form>
                {this.state.users.map((usr, i) => <p key={i} > <span onClick={()=>this.handleEdit(usr,i)}>{usr.name}</span> -- <span onClick={()=>this.deleteUser(usr)}>X</span> </p>)}
            </div>
        )
    }
}
