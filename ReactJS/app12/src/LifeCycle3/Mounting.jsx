import React, { Component } from 'react'
import Updating from './Updating'
import UnMounting from './UnMounting'

export default class Mounting extends Component {
    constructor(props) {
        super(props)
            console.log("iam from mounting 3")
        this.state = {
             count:0
        }
    }
    static getDerivedFromStateProps(props,state){
        console.log("iam from getDerivedFromStateProps mount",props,state)
        return null
    }
    componentDidMount(){
        console.log("iam from componentDidMount")
    }
    Increment=()=>{
        this.setState({count:this.state.count+1})
    }
    Decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    
    render() {
        console.log('iam from render mounting')
        return (
            <div>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <Updating count={this.state.count}/>

                {this.state.count<3 && <UnMounting/>}
            </div>
        )
    }
}
