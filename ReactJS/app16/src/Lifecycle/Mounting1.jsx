import React, { Component } from 'react'
import Updating1 from './Updating1'
import Unmounting from './Unmounting'

export class Mounting1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"I'm from Cycle 1=Mounting"
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
        this.setState({message:"Content changed"})
    }
     displayNone() {
        this.setState({message:""})
    } 
    render() {
        console.log("Hello from render")
        return (
            <div>
               <Updating1 content={this.state.message}/>
                {/* <h2>{this.state.message}</h2> */}
                <button onClick={this.changeContent}>Change Message</button>
                {this.state.message === "Content changed" ? this.displayNone():"None" && <Unmounting />}
               
            </div>
        )
    }
}

export default Mounting1
