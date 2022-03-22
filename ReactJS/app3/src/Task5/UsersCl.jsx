import React, { Component } from 'react';
import axios from 'axios';

export default class UsersCl extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: {
        fname: "",
        email: "",
        password: "",
        address: ""
      },
      persons: [],
      index: null
    }
  }
  handleChange = (e) => {
    let newperson = { ...this.state.person }
    newperson[e.target.name] = e.target.value
    this.setState({ person: newperson })
  }
  addPerson = () => {
    let newPersons = [...this.state.persons]
    newPersons.push(this.state.person)
    axios.post("http://localhost:3000/person1", this.state.person).then(() => {
      localStorage.setItem("persons",JSON.stringify(newPersons))
      this.getAllUsers()
    })

    this.setState({ persons: newPersons })
    this.clearForm()
    console.log(this.state.persons)
  }
  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers() {
    axios.get("http://localhost:3000/person1").then((res) => {
      let newpersondata = { ...this.state }
      console.log(res.data)
      newpersondata["persons"] = res.data
      this.setState(newpersondata)

      // const persons=res.data.map(obj=>obj.data)
      // this.setState({persons})
    })
  }
  clearForm = () => {
    this.setState({
      person: {
        fname: "",
        email: "",
        password: "",
        address: ""
      }
    })
  }
  deletePerson = (pn) => {
    axios.delete("http://localhost:3000/person1/" + pn.id).then((res) => {
      let newPersons = { ...this.state.persons }
      this.clearForm()
      this.getAllUsers()
    })
  }

  editPerson = (person, i) => {
    this.setState({ person, index: i })

  }
  UpdatePerson = (i) => {

    var allpersons = [...this.state.persons]

    allpersons[this.state.index] = this.state.person
    console.log(allpersons)
    axios.put("http://localhost:3000/person1/" + allpersons[this.state.index].id, this.state.person).then((res) => {
      console.log(allpersons)
      this.getAllUsers()
      this.clearForm()

    })

  }

  render() {
    return <div>
      <form>
        <label htmlFor="fname">First name:</label>
        <input type="text" name="fname" value={this.state.person.fname} onChange={(e) => {
          this.handleChange(e)
        }} /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={this.state.person.email} onChange={(e) => {
          this.handleChange(e)
        }} /><br /><br />

        <label htmlFor="password">Password:</label>
        <input type="text" name="password" value={this.state.person.password} onChange={(e) => {
          this.handleChange(e)
        }} /><br /><br />

        <label htmlFor="address">Address:</label>
        <input type="text" name="address" value={this.state.person.address} onChange={(e) => {
          this.handleChange(e)
        }} /><br /><br />

        {this.state.index ? (<button type='button' className="btn btn-primary" onClick={this.UpdatePerson}>update data</button>
        ) : (<button type='button' className="btn btn-primary" onClick={this.addPerson}>add data</button>
        )}


      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">fname</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">address</th>
            <th scope="col">delete</th>
            <th scope="col">edit</th>


          </tr>
        </thead>

        <tbody>
          {this.state.persons.map((pn, i) => {
            return (

              <tr>
                <td>{pn.fname}</td>
                <td>{pn.email}</td>
                <td>{pn.password}</td>
                <td>{pn.address}</td>
                <td>{
                  <button type="button" className="btn btn-danger" onClick={() => { this.deletePerson(pn) }}>delete</button>
                }
                </td>
                <td>{
                  <button type="button" class="btn btn-warning" onClick={() => { this.editPerson(pn, i) }} >edit</button>
                }
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  }
}