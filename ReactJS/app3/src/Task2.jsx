import React, { Component } from 'react'

export default class Task2 extends Component {
  constructor() {
    super()
    this.state = {
      greeting: ("iam writing class component"),
      person: {
        fname: "Chandu",
        email: "chandu@gmail.com",
        proffession: "front end developer"
      },
      users: ["lokesh", "hareesh", "chandu", "abi"]
    }
  }
  render() {
    return (
      <div>
        <h2>Task2</h2>
        <h2>{this.state.greeting}</h2>
        <button onClick={() => { this.setState({ greeting: ("hello welcome to class component") }) }}>click it</button>
        <hr />
        <h2>
          <ul>
            <li>{this.state.person.fname}</li>
            <li>{this.state.person.email}</li>
            <li>{this.state.person.proffession}</li>
          </ul>
        </h2>
        <button onClick={() => {
          this.setState({
            person: {
              fname: "dilip",
              email: "dilip@gmail.com",
              proffession: "front end developer"
            }
          })
        }}>click it</button>
        <hr />
        <h2>{this.state.users.map((ur) => {
          return <ul>
            <li>{ur}</li>
          </ul>
        })}</h2>
        <button onClick={()=>(this.setState({users:["lokesh@gmail.com","hareesh@gmail.com","chandu@gmail.com","abi@gmail.com"]}))}>click it</button>
      <hr/>
      </div>
    )
  }
}
