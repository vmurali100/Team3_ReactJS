import React, { Component } from 'react'
import LifeCycleUpdate from './LifeCycleUpdate'
import LifeCycleUnMounting from './LifeCycleUnMounting'

export default class LifeCycleMounting extends Component {
    constructor(props) {
        super(props)
        console.log("iam from constructor mount component")
        this.state = {
            count:0
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("Hello from getDerivedStateFromProps mount",props,state)
        return null
    }
    componentDidMount(){
        console.log("hello from componentDidMount")
    }
    IncreaseCount=()=>{
        this.setState({count:this.state.count+1})
    }
    render() {
        console.log("iam from mount render component")
        return (
            <div>
                <button onClick={this.IncreaseCount}>IncreaseCount</button>
                <LifeCycleUpdate count={this.state.count}/>
                {this.state.count<3 && <LifeCycleUnMounting/>}

            </div>
        )
    }
}
