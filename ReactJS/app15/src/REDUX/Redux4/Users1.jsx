import React, { Component } from 'react'

export default class Users1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                fname: ""
            },
            users:[{fname:"lokesh"},{fname:"dilip"},{fname:"somu"}],
            index: null
        }
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })
    }
    addUser = () => {
        let newusers = [...this.state.users]
        newusers.push(this.state.user)
        this.setState({ users: newusers })
        this.clearForm()

    }
    clearForm = () => {
        this.setState({
            user: {
                fname: ""
            },
        })
    }
    editUser = (user, i) => {
        this.setState({ user, index: i })
    }
    updateUser = () => {
        let allusers = [...this.state.users]
        allusers[this.state.index] = this.state.user
        this.setState({ users: allusers,index:null })
        this.clearForm()
    }
    deleteUser=(usr)=>{
        let allusers = [...this.state.users]
        this.setState({users:allusers.filter((u)=>u.fname !== usr.fname)})
        this.clearForm()
    }

    render() {
        return (
            <div>
                <p>users1</p>
                <form>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => {
                        this.handleChange(e)
                    }} />
                    {this.state.index ? (<button onClick={this.updateUser} type="button">update user</button>) :
                        (<button onClick={this.addUser} type="button">add user</button>)
                        
                    }

                    <hr />
                </form>
                {this.state.users.map((usr,i) => {
                    return <p key={i}><span><i onClick={() => this.editUser(usr, i)}>{usr.fname}-</i></span>
                    <span onClick={()=>{this.deleteUser(usr)}}>delete</span>
                    </p>
                })}
            </div>
        )
    }
}
