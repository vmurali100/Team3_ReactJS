import React, { Component } from 'react'
import Unmounting3 from './Unmounting3'

export default class Updating3 extends Component {
    constructor(props) {
        super(props)
           console.log("Helo from 3 component")
        this.state = {
             message:"Hello lifeCycle"
        }
    }
    static getDerievedStateFromProps(props,state){
        console.log("Hello from getDerievedStateFromProps from 3 component ",props,state)
        return null
    }
    shouldComponentUpdate(){
        console.log("Hello from compnent3 shouldComponentUpdate ")
        return true
    }
    componentDidUpdate(){
        console.log("Hello from 3 component componentDidUpdate ")
    }
    ChangeMsg=()=>{
     this.setState({
         message:"Hello new msg "
     })
    }
    render() {
        console.log("Hello from render3 component")
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.ChangeMsg}>ClickMe</button>
                {this.state.message && <Unmounting3/>}
            </div>
        )
    }
}
