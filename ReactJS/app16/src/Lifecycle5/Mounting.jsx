import React, { Component } from 'react'
import Updating5 from './Updating5'
import Unmounting from './Unmounting'
export class Mounting5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count:0,
            person:{
                fName:"Abi",
                lName:"M",
                age:24
            }
        }
        console.log("I'm from Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Hello from getDerivedStateFromProps",state,props)
        return {fName:props.student}
    }
    componentDidMount(){
        console.log("Hello from componentDidMount")
    }
    
    render() {
        console.log("Hello from render")
        return (
            <div>
            <h2>{this.state.person.fName}</h2>
                <Updating5 student={this.state.person.fName}/>
                {this.state.count < 10 && <Unmounting/>}
               
            </div>
        )
    }
}

export default Mounting5
