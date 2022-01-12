import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUsersAction, deleteUsersAction, updateUsersAction } from './action'
class Users_Redux extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: ""
            },
            users: [{fname:"lokesh"}],
            index: null
        }
        console.log(props)
    }
    handleChange = (e) => {
        let newUser = { ...this.state.user }
        newUser[e.target.name] = e.target.value
        this.setState({ user: newUser })
    }
    addUser = () => {
        // let newusers = [...this.state.users]
        // newusers.push(this.state.user)
        // this.setState({ users: newusers })
        // this.clearForm()

    }
    clearForm = () => {
        this.setState({
            user: {
                username: ""
            },
        })
    }
    editUser = (user, i) => {
        this.setState({ user, index: i })
    }
    updateUser = () => {
        // let allusers = [...this.state.users]
        // allusers[this.state.index] = this.state.user
        // this.setState({ users: allusers, index: null })
        let newupdateuser={...this.state.user}
        newupdateuser['id']=this.state.index
        this.props.updateUserFunc(this.state.newupdateuser)
        this.clearForm()
    }
    deleteUser = (user) => {
        let allusers = [...this.state.users]
        this.setState({ users: allusers.filter((u) => u.fname !== user.fname) })
        this.clearForm()
    }

    render() {
        const {addUserFunc,deleteUserFunc,updateUserFunc}=this.props
        return (
            <div>
                <p>users1</p>
                <form>
                    <label htmlFor="usernmae"> username:</label>
                    <input type="text" name="username" value={this.state.user.username} onChange={(e) => {
                        this.handleChange(e)
                    }} />
                    {this.state.index ? (<button onClick={this.updateUser} type="button">update user</button>) :
                        (<button onClick={(user)=>addUserFunc(user)} type="button">add user</button>)

                    }

                    <hr />
                </form>
                {this.state.users.map((user, i) => {
                    return <p key={i}><span><i onClick={() => this.editUser(user, i)}>{user.username}-</i></span>
                        <span onClick={() => { deleteUserFunc(user) }}>delete</span>
                    </p>
                })}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        users: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        addUserFunc:(user)=> dispatch(addUsersAction(user)),
        deleteUserFunc:(user)=> dispatch(deleteUsersAction(user)),
        updateUserFunc:(user)=> dispatch(updateUsersAction(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users_Redux)