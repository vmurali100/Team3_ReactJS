import React, { Component } from 'react'
import Child1 from './Child1'

export default class LifeCycle2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        console.log("Hello from constructor")
    }
    static getDerivedStateFromProps(props,state){
     console.log("Hello from getderived state",props,state)
     return null
    }
    componentDidMount(){
        console.log("hello from componentdidmount")
    }
    shouldComponentUpdate(){
        console.log("hello from sgould component Update")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("hello from fet snapchat update")
        return null
    }
    componentDidUpdate(){
        console.log("Hello from component update")
    }
   Changemsg=()=>{
       this.setState({
           message:"Hello new msg"
       })
   }
    render() {
        console.log("Hello from render")
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.Changemsg}>ClickMe</button>
                {this.state.message &&<Child1/>}
            </div>
        )
    }
}
