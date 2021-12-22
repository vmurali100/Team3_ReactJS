import React, { Component } from 'react'
import Child from './Child'

export default class LifeCycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:1
        }
        console.log("Hello from class constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Helo from getDerivedfrom ",props,state)
        return null
    }
    componentDidMount(){
        console.log("Hello from component didmount",)
    
    }
    shouldComponentUpdate(){
        console.log("Hello from shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("Hello from get snapChat")
        return null
    }
    componentDidUpdate(){
        console.log("Hello from component update")
    }
    changeCount=()=>{
        this.setState({count:this.state.count*2})
    }
    render() {
        console.log("Hello from render")
        return (
            <div>
                <h2>count:{this.state.count}</h2>
                <button onClick={this.changeCount}>click</button>
                {this.state.count <30 && <Child/>}
            </div>
        )
    }
}
