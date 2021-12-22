import React, { Component } from 'react'
import Unmounting2 from './Unmounting2'

export default class Updating2 extends Component {
    constructor(props) {
        super(props)
      console.log("Hello From constructor2")
        this.state = {
             count:0
        }
    }
    static getDerivedStateFromProps(props,state){
console.log("Hello from getDerivedStateFromProps2",props,state)
return null
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate from update")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate from updating")
        return null
    }
    componentDidUpdate(){
        console.log("componentDidUpdate from update")
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    decrement=()=>{ 
        this.setState({count:this.state.count-1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    render() {
        return (
            <div>
                <h2>Count:{this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrease</button><br/>
                <button onClick={this.reset}>Reset</button>
                {this.state.count <=5 && <Unmounting2/> }
            </div>
        )
    }
}
