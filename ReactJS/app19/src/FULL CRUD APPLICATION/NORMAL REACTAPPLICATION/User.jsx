import React, { Component } from 'react'


export default class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: {
                fName: "",
                age: "",
                email: ""
            },
            user: [],
            index: null,
        }
    }
    changeValues = (e) => {
        let newUser = { ...this.state.users }
        newUser[e.target.name] = e.target.value
        this.setState({ users: newUser })
    }
    createUser = () => {
        let newUsers = [...this.state.user]
        newUsers.push(this.state.users)
        this.setState({ user: newUsers })
        console.log(newUsers)
        this.handleClear()
    }
    handleClear = () => {
        this.setState({
            users: {
                fName: "",
                age: "",
                email: ""
            },
        })
    }
    handleEdit = (users, i) => {
        this.setState({ users, index:i})
        console.log()
    }
    UpdateUser = () => {
        let newUsers = [...this.state.user]
        newUsers[this.state.index] = this.state.users
        this.setState({ user: newUsers})
        // console.log(newUsers)
        this.handleClear()
    }
    deleteUser = (users) => {
        let newUsers = [...this.state.user]
        this.setState({ user: newUsers.filter((usr) => usr.fName !== users.fName) })
        this.handleClear()
    }
    render() {

        return (
            <div>
                <form >
                    <label htmlFor="fName">Enter Name :</label> <br />
                    <input type="text" name="fName" value={this.state.users.fName} onChange={(e) => { this.changeValues(e) }} /> <br />
                    {/* <label htmlFor="age">Enter age :</label> <br />
                    <input type="text" name="age" value={this.state.users.age} onChange={(e) => { this.changeValues(e) }} /> <br />
                    <label htmlFor="email">Enter email :</label> <br />
                    <input type="text" name="email" value={this.state.users.email} onChange={(e) => { this.changeValues(e) }} /> <br /> <br /> */}
                    {this.state.index ? (<button type="button" onClick={this.UpdateUser}> Update</button>) : (<button type="button" onClick={this.createUser} >Submit </button>)}


                </form>
                {this.state.user.map((us,i) => (
                     
                     <li key={i} > <span onClick={() => this.handleEdit(us, i)}> Name : {us.fName}</span>   <span onClick={() => { this.deleteUser(us) }}>DeleteUser</span></li>
                    

                 
                )
                    
                )}
            </div>
        )
    }
}
