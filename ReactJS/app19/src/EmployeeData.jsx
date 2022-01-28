import React, { Component } from 'react';
import axios from 'axios';

export default class EmployeeData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                fname: "",
                email: "",
                contact: "",
                address: "",
                qualification: "",
                passedout: "",
                description: ""
            },
            users: []
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
        axios.post("http://localhost:3000/employee",this.state.user).then(()=>{
            
        })
        this.setState({ users: newusers })
        console.log(this.state.users)

        this.clearForm()
    }
    clearForm = () => {
        this.setState({
            user: {
                fname: "",
                email: "",
                contact: "",
                address: "",
                qualification: "",
                passedout: "",
                description: ""
            }
        })
    }


    render() {
        return <div>
            <form>
                <label htmlFor="">fname:</label>
                <input type="text" name="fname" value={this.state.user.fname} onChange={(e) => {
                    this.handleChange(e)
                }} /><br /><br />

                <label htmlFor="">email:</label>
                <input type="text" name="email" value={this.state.user.email} onChange={(e) => {
                    this.handleChange(e)
                }} /><br /><br />


                <label htmlFor="">contact:</label>
                <input type="text" name="contact" value={this.state.user.contact} onChange={(e) => {
                    this.handleChange(e)
                }} /><br /><br />


                <label htmlFor="">address:</label>
                <input type="text" name="address" value={this.state.user.address} onChange={(e) => {
                    this.handleChange(e)
                }} /><br /><br />

                <label htmlFor="">qualification:</label>
                <input type="text" name="qualification" value={this.state.user.qualification} onChange={(e) => {
                    this.handleChange(e)
                }} /><br /><br />


                <label htmlFor="">passedout:</label>
                <input type="text" name="passedout" value={this.state.user.passedout} onChange={(e) => {
                    this.handleChange(e)
                }} /><br /><br />

                <label htmlFor="">description:</label>
                <input type="text" name="description" value={this.state.user.description} onChange={(e) => {
                    this.handleChange(e)
                }} /><br /><br />

                <button onClick={this.addUser} type="button" className="btn btn-primary">add user</button>

            </form>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">fname</th>
                        <th scope="col">email</th>
                        <th scope="col">contact</th>
                        <th scope="col">address</th>
                        <th scope="col">qualification</th>
                        <th scope="col">passedout</th>
                        <th scope="col">description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.users.map((usr) => {
                        return (

                            <tr>
                                <td>{usr.fname}</td>
                                <td>{usr.email}</td>
                                <td>{usr.contact}</td>
                                <td>{usr.address}</td>
                                <td>{usr.qualification}</td>
                                <td>{usr.passedout}</td>
                                <td>{usr.description}</td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>

        </div>
    }
}
