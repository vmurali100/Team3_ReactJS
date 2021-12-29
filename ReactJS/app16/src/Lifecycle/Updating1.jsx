import React, { Component } from 'react'


export default class Updating1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            greetongs:"Hello"
        }
        console.log("Hello from constructor- Updating1")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Hello from getDerivedStateFromProps - Update1",state,props)
        return null
    }
    shouldComponentUpdate(){
        console.log("I am from shouldComponentUpdate - Update1")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("I am from getSnapshotBeforeUpdate - Updtae1")
        return null
    }
  
    componentDidUpdate(){
      console.log("I am from componentDidUpdate - Updtae1");
    }
    
    render() {
        console.log("I'm from render-Update1")
        return (
            <div>
                <h2>{this.props.content}</h2>
                
              
            </div>
        )
    }
}