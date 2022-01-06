import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increment(){
        // this.setState({
        //     count:this.state.count+1
        // },
        // ()=>{
        //     console.log("callback",this.state.count)
        // }
        // )
        this.setState(prevState=>({
            count:prevState.count+1
        }))

    }
    incrementthree(){
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>this.incrementthree()}>increment</button>
            </div>
        )
    }
}
