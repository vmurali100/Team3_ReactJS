import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email:"",
            comments:"",
            cities:"Kurnool"
        }
    }
    ChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    ChangEmail=(event)=>{
      this.setState({
          email:event.target.value
      })
    }
    ChangeComments=(event)=>{
     this.setState({
         comments:event.target.value
     })
    }
    ChangeCity =(event)=>{
        this.setState({
            cities:event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={this.state.name} onChange={this.ChangeName} />
                    </div>
                    <div>
                        <label >Email:</label>
                        <input type="text" value={this.state.email} onChange={this.ChangEmail} />
                    </div>
                    <div>
                        <label>Comments:</label>
                        <textarea value={this.state.comments} onChange={this.ChangeComments}></textarea>
                    </div>
                    <div>
                <label>cities:</label>
                     <select value={this.state.cities} onChange={this.ChangeCity}>
                     <option value="Kurnool">Kurnool</option>
                     <option value="Kadapa">kadapa</option>
                     <option value="Chittor">Chittore</option>
                     </select>
                    <button type="button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

