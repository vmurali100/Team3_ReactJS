import React, { Component } from 'react'

export default class Mounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
        console.log("Hello from Constructore component")
    }
    ChangeMsg=()=>{
        this.setState({message:"Hello new Message"})
    
    }
    static getDerivedStateFromProps(props,state){
    console.log("Hello from Mounting ",props,state)
    return null
    }
   componentDidMount(){
       console.log("Hello from component did mount ")
   }
    render() {
        console.log("hello from render")
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.ChangeMsg}>Change msg</button>
            </div>
        )
    }
}
