import React, { Component } from 'react'
import CompB from './CompB';
export default class CompA extends Component {
    constructor(props){
        super(props)
        this.state={
            count:1
        }
        console.log("Iam Construtor")
    }
    // change=()=>{
    //     this.setState({count: this.state.count+1})
        
    // }
    static getDerivedStateFromProps(state,props){
        console.log("I am From getDerivedStatesFromProps",state,props)
        return null
    }
    componentDidMount(){
        console.log("I'm from Component did mount")
    }
    render() {
        console.log("I'm from REnder")
        return (
            <div>
                  
                <h2>I'm from class comp={this.state.count}</h2>
                <button onClick={this.change}>Change count </button>
                <CompB />
            </div>
        )
    }
}
