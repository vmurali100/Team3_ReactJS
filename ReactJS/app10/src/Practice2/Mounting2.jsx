import React, { Component } from 'react'

export default class Mounting2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
        console.log("Hello from constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Hello from second example",props,state)
        return null
    }
    componentDidMount(){
        console.log("hello from second example in componentDidMount ")
    }
    ChangeCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        console.log("Render component")
        return (
            <div>
              <h2>Count:{this.state.count}</h2>  
              <button onClick={this.ChangeCount}>Change val</button>
            </div>
        )
    }
}
