import React, { Component } from 'react'
import LifeCycleUnmounting2 from './LifeCycleUnmounting2'
import LifeCycleUpdate2 from './LifeCycleUpdate2'

export default class LifeCycleMounting2 extends Component {
    constructor(props) {
        super(props)
            console.log("iam from Mount constructor")
            this.state = {
                count:0
            }
    }
    static getDerivedStateFromProps(props,state){
        console.log("Hello from getDerivedStateFromProps mount",props,state)
        return null
    }
    componentDidMount(){
        console.log("iam from componentDidMount")
    }
    IncreaseCount=()=>{
        this.setState({count:this.state.count+1})
    }
    
    render() {
        console.log("iam from render mount")
        return (
            <div>
                <button onClick={this.IncreaseCount}>IncreaseCount</button>
                <LifeCycleUpdate2 message={this.state.count}/>
                {this.state.count<=4 && <LifeCycleUnmounting2/>}

            </div>
        )
    }
}
