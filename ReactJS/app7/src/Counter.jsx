import React, { Component } from 'react'

export  class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    
    render() {
        return (
            <div>
                <h2>count-{this.state.count}</h2>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}


export  class Counter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Count:1
        }
    }
    IncrementFive(){
        this.setState({
            Count:this.state.Count*5
        })
    }
    
    render() {
        return (
            <div>
                <h2>Count{this.state.Count}</h2>
                <button onClick={()=>this.IncrementFive()}>Increment</button>
            </div>
        )
    }
}




