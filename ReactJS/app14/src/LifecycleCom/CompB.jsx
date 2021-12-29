import React, { Component } from 'react'

export default class CompB extends Component {
    constructor(props){
        super(props)
        this.state={
            count:1
        }
        console.log("Iam Construtor compB")
    }
    change=()=>{
        this.setState({count: this.state.count+1})
        
    }
    static getDerivedStateFromProps(state,props){
        console.log("I am From getDerivedStatesFromProps compB",state,props)
        return null
    }
    componentDidMount(){
        console.log("I'm from Component did mount compB")
    }
    render() {
        console.log("I'm from REnder compB")
        return (
            <div>
                <h2>I'm from class comp={this.state.count}</h2>
                <button onClick={this.change}>Change count </button>
            </div>
        )
    }
}