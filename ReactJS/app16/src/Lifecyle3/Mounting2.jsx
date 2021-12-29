import React, { Component } from 'react'
import Unmounting2 from './Unmounting2'
import Updating2 from './Updating2'
export class Mounting2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            greetings:"Welcome"
        }
        console.log("I'm from Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Hello from getDerivedStateFromProps",state,props)
        return null
    }
    componentDidMount(){
        console.log("Hello from componentDidMount")
    }
    changeContent=()=>{
        this.setState({greetings:"Hello"})
    }
    
    render() {
        console.log("Hello from render")
        return (
            <div>
               <Updating2 content={this.state.greetings}/>
                {/* <h2>{this.state.message}</h2> */}
                <button onClick={this.changeContent}>Click</button>
                {this.state.greetings === "Hello" ? this.displayNone():"None" && <Unmounting2 />}
               
            </div>
        )
    }
}

export default Mounting2
