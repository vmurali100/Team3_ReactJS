import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser, getAllUser, UpdateUser } from '../Action/action'


class UserRedux extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: {
                fName: "",
                // age: "",
                // email: ""
            },
            user: [],
            index: null,
        }
        console.log(this.props)
    }
    changeValues = (e) => {
        let newUser = { ...this.state.users }
        newUser[e.target.name] = e.target.value
        this.setState({ users: newUser })
    }
    // createUser = () => {
    //     // let newUsers = [...this.state.user]
    //     // newUsers.push(this.state.users)
    //     // this.setState({ user: newUsers })
    //     // console.log(newUsers)
    //     // this.handleClear()
    //     // this.props.getAllData()
    // }
    handleClear = () => {
        this.setState({
            users: {
                fName: "",
                
            },
            index:null
        })
    }
    handleEdit = (users, i) => {
        this.setState({ users, index:i})
        console.log(i)
    }
    handleUpdate = () => {
        // let AllUsers = [...this.state.user];
        // AllUsers[this.state.index] = this.state.users;
        // this.setState({ user: AllUsers, index: null });
        let updatedUser={...this.state.users}
        updatedUser['id']=this.state.index
        this.props.createUSerData(updatedUser)
        this.handleClear();
      };
    // deleteUser = (users) => {
    //     let newUsers = [...this.state.user]
    //     this.setState({ user: newUsers.filter((usr) => usr.fName !== users.fName) })
    //     this.handleClear()
    // }
    render() {
        const {getAllData,deleteUserData,createUSerData}=this.props
        return (
            <div>
                {/* {console.log(this.props)} */}
                <form>
                    <label htmlFor="fName">Enter Name :</label> <br />
                    <input type="text" name="fName" value={this.state.users.fName} onChange={(e) => { this.changeValues(e) }} /> <br />
                    {/* <label htmlFor="age">Enter age :</label> <br />
                    <input type="text" name="age" value={this.state.users.age} onChange={(e) => { this.changeValues(e) }} /> <br />
                    <label htmlFor="email">Enter email :</label> <br />
                    <input type="text" name="email" value={this.state.users.email} onChange={(e) => { this.changeValues(e) }} /> <br /> <br /> */}
                    {/* {this.state.index  !== null ? (<button type="button" onClick={this.handleUpdate}> Update</button>) : 
                    (<button type="button" onClick={this.createUser} >Submit </button>)} */}
                    {this.state.index  !== null ? (<button type="button" onClick={this.handleUpdate}> Update</button>) : 
                    (<button type="button" onClick={()=>{getAllData(this.state.users);
                        this.handleClear()}}
                     >Submit </button>)}
                   
                </form>
                {this.props.user.map((us,i) => (
                     
                    //  <li key={i} > <span onClick={() => this.handleEdit(us, i)}> Name : {us.fName}</span>   <span onClick={() => { this.deleteUser(us) }}>DeleteUser</span></li>)
                     <li key={i} > <span onClick={() => this.handleEdit(us, i)}> Name : {us.fName}</span>   <span onClick={() => { deleteUserData(us)}}>DeleteUser</span></li>)

                )}
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        user:state
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getAllData:(user)=>dispatch(getAllUser(user)),
        deleteUserData:(user)=>dispatch(deleteUser(user)),
        createUSerData:(user)=>dispatch(UpdateUser(user))

    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserRedux)
