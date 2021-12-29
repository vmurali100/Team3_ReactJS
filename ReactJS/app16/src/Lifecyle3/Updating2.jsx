import React, { Component } from 'react'


export default class Updating2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            greetongs:"Hello"
        }
        console.log("Hello from constructor- Update2")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Hello from getDerivedStateFromProps - Update2",state,props)
        return null
    }
    shouldComponentUpdate(){
        console.log("I am from shouldComponentUpdate - Update2")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("I am from getSnapshotBeforeUpdate - Update2")
        return null
    }
  
    componentDidUpdate(){
      console.log("I am from componentDidUpdate - Update2");
    }
    
    render() {
        console.log("I'm from render-Update2")
        return (
            <div>
                <h2>{this.props.content}</h2>
                
              
            </div>
        )
    }
}