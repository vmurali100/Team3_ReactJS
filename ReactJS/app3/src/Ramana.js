import React from 'react'
import { Suraj } from './Suraj'


export default function Ramana() {
    this.state = {
        person: {
            fname: "Sunder",
            lname: "K"
        }
    }
    render()
    return <div> <h2>Hello from Ramana component</h2>
        <Suraj personinfo={this.state.person}/>
    </div>
}
